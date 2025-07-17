# Interpreting a Page Structure for Troubleshooting

Owner: Katie Roberts

Verification: Expired

# **Overview**

As you can imagine, autofill issues on specific websites are common when troubleshooting extensions. Understanding how a web page is structured and how 1Password reads and fills these pages is crucial for effective troubleshooting. Since most web pages are built using HTML, CSS, and JavaScript (JS), having a foundational knowledge of these technologies can greatly enhance your ability to diagnose issues and provide solutions.

By the end of this document, you will gain a better understanding of the interplay between [**HTML**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21), [**CSS**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21), and [**JavaScript**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21). You will be equipped to diagnose common autofill issues effectively. This knowledge will also enable you to explain autofill behavior to end-users and ensure that forms are optimized for a seamless experience.

# What is a page structure?

Understanding how to separate each aspect of a page structure is important as it will help streamline the process of troubleshooting when you know how to distinguish between all of the information showing, you’ll be better be able to find any culprits. This will help you not only reflect this information in a clear manner to the customer, but also help you structure a strong GitLab issue if you need it.

There are a couple of ways you can read a page structure, either by downloading the page structure JSON file using 1Password; or by inspecting the page itself. When asking a customer to share a page with us, we’ll ask them to collect the page structure below

### **How to collect a page structure JSON file**

- How to
    1. Right click anywhere on the page that you're having issues with.
    2. Select “**1Password-Password Manager”** → “**Help”** → “**Collect Page Structure”**.
    3. Save and open the downloaded file.
- What does a page structure look like?
    
    Standard page structure from Simple Login form on ***Autofill.me***
    
    [Login_Page.json](Interpreting%20a%20Page%20Structure%20for%20Troubleshooting%201c812a18962f8089b232eb1d74ddaf0b/Login_Page.json)
    

### **How to inspect the page using DevTools**

- How to
    1. Navigate to the problem page and right click in the field you’re having troubles with.
    2. Select “**Inspect”** 
- What does inspecting a page look like?
    
    Standard view inspecting the Simple Login form on ***Autofill.me***
    
    ![CleanShot 2025-01-10 at 14.43.52@2x.png](Interpreting%20a%20Page%20Structure%20for%20Troubleshooting%201c812a18962f8089b232eb1d74ddaf0b/CleanShot_2025-01-10_at_14.43.522x.png)
    

More information about opening and navigating DevTools. They are fairly similar throughout most browsers.

- https://developer.chrome.com/docs/devtools/open

You’ll notice that the [**JSON file**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) and [**Inspecting the Page**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) look a little bit different, each containing a different level of information, so we’ll break down each one a bit more in the sections below. 

- [How to interpret a JSON file received from a customer](Interpreting%20a%20Page%20Structure%20for%20Troubleshooting%201c812a18962f8089b232eb1d74ddaf0b.md)
- [Interpreting a page structure when inspecting a page](Interpreting%20a%20Page%20Structure%20for%20Troubleshooting%201c812a18962f8089b232eb1d74ddaf0b.md)

---

# How to interpret a JSON file received from a customer

A page structure is a quick way to have an overview of the page without needing to access the page itself. As mentioned previously, it’s also used when opening issues on GitLab. The example below is a login form, which is formatted in JSON and is an easier way to read and parse information. Using the example page structure below we can break down a simple login page.

[Login_Page.json](Interpreting%20a%20Page%20Structure%20for%20Troubleshooting%201c812a18962f8089b232eb1d74ddaf0b/Login_Page.json)

```json
{
  "unparsedUrl": "https://autofill.me/form/login-simple",
  "title": "Test Autofill",
  "frames": [
    {
      "fields": [
        {
          "autocompleteType": "username",
          "formOpid": 0,
          "htmlId": "username",
          "htmlName": "username",
          "htmlClass": "form-control",
          "isActive": true,
          "opid": 0,
          "type": "text",
          "dataAttributes": {

          },
          "label": "Username",
          "labelBefore": "Username"
        },
```

Key:

`unparsedUrl`: This is the URL of the webpage that the form belongs to, which in this case is `"https://autofill.me/form/login-simple"`. This URL points to the specific login form that the data describes.

`title`: `"Test Autofill"` refers to the title of the page, likely displayed in the browser tab when visiting the page.

`htmlName:` The `name` of the HTML field helps to identify the field when the form is submitted.

 

`htmlId:` The `id` attribute in HTML is used to identify an element uniquely. 

`autocompleteType`: Specifies the type of information the field is trying to capture. e.g., `"username"` for the username field.

`type`: This is the input type of the field. E.g., `"text"` for the username field is different to the `"password"` type for the password field. This tells us what data type is expected in this field, and what B5X is wanting to input.

Since this specific page is set up to work perfectly with 1Password, it’s important to note that you’re more likely to come across page structures that have a slightly different `htmelName` for fields, or use a different `type` for the field. 

### Example of a broken page

```json
{
    "unparsedUrl": "https://atnet.transitionspro-hdf.fr/",
    "title": "Transitions Pro Hauts-de-France",
    "frames": [
        {
            "fields": [
                {
                    "autocompleteType": "off",
                    "formOpid": 0,
                    "htmlId": "A18",
                    "htmlName": "A18",
                    "htmlClass": "l-27 A18 padding webdevclass-riche wbActif wbFocus",
                    "isActive": true,
                    "opid": 0,
                    "type": "search",
                    "dataAttributes": {
                        "webdevClassUsr": ""
                    }

```

Take this page as an example. A customer wrote in saying that there was no inline menu and autofilling didn’t work. In this case, I can see that there a couple of reasons this may be the case. 

1. The `htmlId` is set as `“A18”` rather than `“username”` or `“email”` so 1Password won’t offer to autofill here.
2. The `type` is set as `“search”` which means this is set as a search field, as apposed to a `"username"`or `"email"` field. 1Password should not offer to autofill in search fields, which means that there will be limited workarounds from our side. 

GitLab issue: REDACTED

This is one of the many examples of page structures that show why autofill may not work due to the page structure. 

### How might a user describe a filling issue?

There are many ways a user may describe the experience they’re having. Below are some examples of different types of phrasing that you might see. Though this is not an exhaustive list and there ultimately many ways a user may describe their issue.

- “I click on the field and nothing happens” or “When I select my password nothing goes into the field”
- “When I click on the 1Password icon, nothing happens.”
- “I can’t see my username and password even though I have it saved in my 1Password” or “1Password doesn’t offer my username”
- “1Password is suggesting the wrong email” or “It keeps showing the incorrect information”
- “I see an error message that my details are wrong when they’re not!”

### Potential workarounds

Where possible you should always test the website behaviour yourself to see if you can reproduce the issue. This will also help in reassuring the user that you’re taking their experience seriously.

1. When inspecting the webpage you may find that some of the HTML elements have unexpected `htmlName` , `htmlId` or even `type`. Quite often, a good work around will be to show the user how to add a [**custom field](https://support.1password.com/custom-fields/)** to their login item, allowing 1Password to more accurately read and fill the correct fields.
2. Using the **Autofill** button in B5X to fill fields that aren’t offered items in the inline menu.
3. Users should be able to **Click & Drag and Copy and paste** their credentials into the fields if autofilling isn’t working at all.
4. Finally, opening a [**Filling Issue**](https://www.notion.so/How-to-file-an-issue-in-GitLab-ffdbfa2654bf49638c7893905c77f55e?pvs=21) on [**GitLab**](https://gitlab.1password.io/dev/core/core/-/issues/?sort=updated_desc&state=opened&first_page_size=100).

### **Autosubmit feature**

The **autosubmit** feature has often caused some issues on multiple websites. Though the behaviour can differ, the most common indication that this feature is causing some issues are:

- The customer reports they receive an error message of incorrect credentials when autofilling, but copying and pasting their credentials is successful.
- The page is refreshed or the fields emptied.
- The page is redirected to another page such as “Sign-up” or “Forgotten password” pages.

The best way to test this is to ask them to disable the feature by following the steps below:

- **Globally disable the feature**
    1. Right click on the 1Password icon in your browser toolbar → Click **Settings**.
    2. Click **Autofill & save**.
    3. Find and disable setting **Sign in automatically after autofill**
    
- **Disable the feature for specific items only**
    1. When on the problem page → Click on the 1Password icon.
    2. Click on the three vertical dots.
    3. Click on **Don't sign in automatically.**
    

Once you’ve confirmed that this is the issue, you should then create a [**Filling Issue**](https://www.notion.so/How-to-file-an-issue-in-GitLab-ffdbfa2654bf49638c7893905c77f55e?pvs=21) on [**GitLab**](https://gitlab.1password.io/dev/core/core/-/issues/?sort=updated_desc&state=opened&first_page_size=100).

### 1Password is showing in unwanted fields

Sometimes a user will report that they’re seeing 1Password suggestions in fields they don’t want. More often than not, B5X is acting as expected in offering **Identity items** or **Credit card** items in fields. However, there are many use cases where users are not wanting their own information to be autofilled in these pages. An example could be that they’re on an customer invoice page where they should be writing their customer information, rather than their personal information. Before moving forward, it’s best to gather more information:

- Which website is this? - It’s best to grab a URL or [**page structure**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) in these cases.
- Which fields is 1Password showing suggestions for?

These two simple questions will help you understand whether 1Password is acting as expected, or whether 1Password is genuinely offering incorrect credentials, or in a field that it shouldn’t be e.g., [a `search` field.](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21)

If 1Password is acting as expected, such as offering an **Identity item** in a `Name` or `Address` field, or a **Credit Card** item in a `creditCard` field, then you could recommend that they hide 1Password on the page to stop the suggestions showing and interrupting their workflow.

- Hide 1Password on a page
    1. Right click anywhere on the page.
    2. Click **1Password - Password manager**.
    3. Click **Hide on this page**.
    

If 1Password is appearing in a field that it shouldn’t be, or [**Hide on this page**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) doesn’t help, you should open a [**Filling Issue**](https://www.notion.so/How-to-file-an-issue-in-GitLab-ffdbfa2654bf49638c7893905c77f55e?pvs=21) on [**GitLab**](https://gitlab.1password.io/dev/core/core/-/issues/?sort=updated_desc&state=opened&first_page_size=100).

---

# Interpreting a page structure when inspecting a page

This section will go more in-depth into the page structure from the developers tools in the browser. From here you’ll be able to see more details about HTML, CSS and JS that is present the page. All of which can have an impact on autofilling

- **Understanding HTML**
    
    HTML forms the foundation of user input fields on websites. It’s integral to understand the different elements such as `<input>` fields and their various attributes (e.g., field `name`, `id`, or `type`), to understand how 1Password is recognising and autofilling data correctly.  A misplaced attribute, or incorrectly named form field can stop autofilling working as we would expect.
    
    - **Shadow DOMs**- *A shadow DOM is an element used to create a “hidden” part of a web page. this “hidden” part can have it’s own HTML structure and styles that don’t affect the rest of the page, and vice versa.*
        
        Picture a house. The decor or style inside of the room doesn’t affect the rest of the house, and changes in the rest of the house’s decor don’t alter the rooms appearance. In terms of Shadow DOMs, this is called a *scoped style*.
        
        *Scoped styles* allow you to style individual elements on a unique way without worrying that any other elements on the page will be affected by these styles. They also “protect” that element from being affected by styles that you apply to the rest of the page. 
        
        - **Why do websites use Shadow DOMs?**
            
            **Common uses**
            
            - Interactive elements.
            - Secure payment widgets and  checkout forms.
            - Secure login forms and authentication components.
            - Complex, interactive financial calculators and tools.
            - Video players and media controls
            
                    …. and many more
            
            **Security**
            
            - Limits exposure of internal structure and logic, reducing the risk of tampering.
            
            **Encapsulation**
            
            - Isolates component styles and scripts to avoid conflicts with the rest of the page.
            
            **Maintainability**
            
            - Simplifies management and debugging of complex components by keeping their internals separate.
            
            **Reusability**
            
            - Enables creating self-contained, reusable web components.
            
        - **How do Shadow DOMs interact with 1Password?**
            
            Shadow DOMs can cause issues for password managers like 1Password by hiding form fields, which prevents autofilling events. Custom elements and security policies within Shadow DOMs further complicate detection and interaction.
            
        - **How to identify Shadow DOMs.**
            1. Browser Developer Tools (Inspecting the page)
                1. Use the *inspect* feature in the browser developers tools and look for any `#shadow-root` element in the DOM tree.
            2. Element Highlighting
                1. Hover over elements to see if they contain shadow roots, often indicated by a greyed-out shadow boundary.
            3. Shadow DOM badges
                1. Some browsers add badges or icons next to elements in the inspector indicating a shadow root.
        
    - **What are HTML Elements?**
        
        
        HTML Elements are basically the building blocks of a HTML document. Elements consist of a pair of tags (an opening tag and a closing tag) with content in between. Elements can represent anything from text, images, links, form fields to entire sections of a webpage. 
        
        When inspecting a page you’ll see a lot of the **`<div>`** element. This can look quite overwhelming but this element is essentially used as a way to group other HTML elements together. There isn’t a particular meaning to these elements for the purpose of autofilling, but it’s useful to understand that they’re used as a structural or layout tool, to organise the content on the webpage. Think of **`<div>`** elements as separate boxes that contain all the information we need to build the webpage.
        
        Example: 
        
        ```html
        <div class="container">
        <h1>Welcome to My Website</h1>
        <p>This is an introductory paragraph about the site.</p>
        </div>
        ```
        
        **Some example of Elements** 
        
        - **`<input>`**: Most commonly used element for autofilling various types of data (e.g., text, password, email, username, phone number).
        - **`<textarea>`**: Used for larger text inputs. Browsers may autofill data for fields like address.
        - **`<select>`**: Used for drop downs (e.g., country, state), allowing browsers to autofill user preferences like country or language.
        - **`<button>`**: Does not interact directly with autofill but is crucial for submitting the autofilled data.
        
    - **What are HTML Attributes?**
        
        
        Put simply, HTML attributes help guide the browser in recognising what kind of data each form field should be filled with. Having these attributes accurately set up ensures that 1Password can correctly recognise and fill the correct credentials. If one of the attributes are missing or set as something unexpected, autofilling may fail.
        
        Below is a short list of some HTML attributes, and how they’re used. Click on the toggle to 
        
        **Some examples of Attributes** 
        
        - **`autocomplete`** - *This attribute helps “guide” 1Password by providing additional information about what type of information should be filled in this field.*
            
            
            This can be used to specify that a field is for a password, a username, or other specific types of data. A good example is the page below:
            
            ```html
            <input type="text" name="username" autocomplete="username">
            <input type="password" name="password" autocomplete="current-password">
            ```
            
            Here, the `autocomplete` attribute is telling us that the `password` field should be filled with the `current-password`. In this instance you should be prompted with your current saved password. If, for example, you were on a page that wanted you to change your password, you may also see:
            
            ```html
            <input type="password" name="password" autocomplete="new-password">
            ```
            
            This should indicate that the current password should not be offered, and instead, a new password should be offered.
            
        - **`name`** - *This attribute helps 1Password identify which information should be filled here.*
            
            
             A very basic example below shows that this form is looking for a `username` in the `text` field, and a `password` in the `password` field.
            
            ```html
            <form>
            <input type="text" name="username" id="username">
            <input type="password" name="password" id="password">
            </form>
            ```
            
        - **`id`** - *This attribute also helps 1Password identify the fields that should be autofilled.*
            
            
            The `id` attribute is used to identify an element on a webpage. It can be applied to various HTML elements, but should be unique. This means that no two elements should have the same `id` value. This means that the functions of CSS and JSS can be applied to specific and accurate elements.
            
            Example:
            
            ```html
            <input type="text" id="email-input" class="TextInput-module__input--CatW9 TextInput-module__input-animate-label--3-HhS" value="" data-testid="input-text-email-input" autocomplete="on" name="email" placeholder="">
            ```
            
        - **`type`** - *This attribute is used to define the kind of input that an element should be e.g., `text`, `number`, `date` .*
            
            
            This is quite an important attribute for autofilling with 1Password, as it ensures 1Password knows which information to autofill. For example, for a `password` field, it would autofill a `password` , but if the field had was a `number` then 1Password shouldn’t try and autofill a password here.
            
            Example:
            
            ```html
            <input type="email" id="email" name="email" autocomplete="email">
            ```
            
            If, however, the `type` in this example was set to `search`(typically used for search fields), 1Password shouldn’t offer to autofill here.
            
            This is an important attribute to check during the troubleshooting, so you can either help the customer change the saved field type in 1Password, or raise an internal issue on GL. It’s important to note that since this is down to the decision of the web developers, our developers may not be able to do a lot in the way of fixing this type of issue.
            
        - **`placeholder`** *- This attribute shows the user what should be in afield, typically as greyed-out text until something is typed or filled in the field, e.g., “Enter your email address”.*
            
            
            This doesn’t typically affect autofilling, however, at a quick glance, this can sometimes help with identifying what the `name` or `type` of data the page is wanting to have autofilled here.
            
        - **`required`** *- This attribute is used to show the user that the field must be filled before submitting the form.*
            
            
            Although not directly related to 1Passwords ability to autofill, it’s useful to know that occasionally, you may come across a field where it’s set as `required` but it isn’t made clear for the user. 
            
        - **`autofocus`** *- This attribute is used to focus a specific input field when the page is loaded, typically where the cursor will automatically be active.*
            
            
            This attribute is useful to streamline some processes, though this can cause some issues if an expected field or button has the `autofocus` attribute applied. For example, only one element can have the `autofocus` attribute, so you may find that if a page has multiple that either the `autofocus` doesn’t work at all, or the cursor skips between the field, making it hard to use any of the inline menus. 
            
            Additionally, if the page contains dynamic content (e.g., using JavaScript), `autofocus` may not always behave as intended unless the content is fully rendered first.
            
        - **`value`** *- This attribute is used to define the initial value of a form field.*
            
            
            There are a few ways that this attribute may be used:
            
            1. **Input fields**
                
                The `value` attributes sets the initial value of an input field, like text, or passwords etc. For example, if a `text` field is set as `value`=”Hello, world!”, then when the page is loaded, the text field will already be filled with “Hello, world!” as default. Typically, this field can be changed by the user.
                
            2. **Checkbox and Radio Buttons**
                
                This `value` specifies that the value will be sent when the form is submitted. This is only the case when the checkbox of radio button is select.
                
                Example:
                
                ```html
                <input type="checkbox" name="Subscribe" value="yes">
                ```
                
            
                  In this example, when the form is submitted and the checkbox is checked, it will send the information `subsribe=yes` to the server.
            
            1. **Option**
                
                This `value` attribute specifies which option value will be sent when the form is submitted.
                
                Example:
                
                ```html
                <select name="colour">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
                ```
                
            
                    In this example if the user selects “Red”, the value `red` will be sent when the form is submitted.
            
            1. **Buttons**
                
                
                This `value` attribute is used to define the text or function of a button.
                
                Example:
                
                ```html
                <button type="submit" value="send">Submit</button>
                ```
                
            
                   In this example, when the button is clicked, the `value` ”send” can be sent along with the form data.
            
            > *2025-02-11 - Note: Should find out how the “auto submit” feature activates this and why this might go wrong. Perhaps a different document for this.*
            > 
            
        - **`pattern`** *- This attribute is used to specify that the `<input>` value must match for the form to be successfully submitted.*
            
            
            This attribute ensures that the user input matches the expected information according to the specific format, e.g., email, phone number length, password length etc. If the user input doesn’t match the `pattern` , then the form will not be submitted and may produce an error message such as “Please enter a valid email address”.
            
            Example of a password `pattern` attribute:
            
            ```html
            <input type="password" id="password" name="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
              title="Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one special character">
            ```
            
                  What this means:
            
                   The `pattern` attribute is enforcing the password rules as follows:
            
            - `^(?=.*[a-z])` : At least one lowercase letter
            - `(?=.*[A-Z])`: At least one uppercase letter
            - `(?=.*[!@#$%^&*])`: At least one special character from **!@#$%^&**
            - `(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$`: The password must be at least 8 characters long, and it can only contain letters (uppercase and lowercase), and special characters.
            
            This means that any password created by the user that does not match these rules, will not be accepted. 
            
            > *2025/02/11 - Note: Should find out about the “smart password” feature and how it detects these rules.*
            > 
            
        
        ---
        
- **Understadning CSS**
    
    As CSS *(*[**Cascading**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) *Style Sheets)* is used to style the page, there isn’t likely to be a direct impact on the autofilling function. However, it is important to note that a poorly styled page can hide fields or other key elements making it challenging for a user to navigate the page. This can include; *colours, fonts, spacing (margins and padding), alignment, animations, layouts (grid, flexbox, etc)*
    
    Understanding which parts of a page structure are CSS will help you streamline your focus on other aspects of the page, and will help you understand whether CSS is having an impact on the way the fields are presented to the user, and to 1Password.
    
    CSS can also be used to style the appearance of form fields that have been autofilled, or still need to be autofilled. Often, you’ll find that after you’ve autofilled a field, the field will show a blue background, rather than white.
    
    Whereas, if you type in the text, you’ll notice that the field remains white. This helps differentiate between which fields have been autofilled and which have not. This can also confuse some users so it’s important to be able to explain that this is expected behaviour, and generally doesn’t indicate anything nefarious.
    
    ### How might CSS styles impact autofilling on a web page?
    
    ![CleanShot 2025-02-11 at 13.28.51.gif](Interpreting%20a%20Page%20Structure%20for%20Troubleshooting%201c812a18962f8089b232eb1d74ddaf0b/CleanShot_2025-02-11_at_13.28.51.gif)
    
    - **Hiding fields**
        1. Using `display: none;` completely removes the element from the layout, so it won’t take up any space on the page. 
        2. Using `visibility: hiden;`will hide the element, but still provide space within the layout. This generally means that the element is still present, but the space it should take up is still present.
        3. **`display: none`** is the most complete method of hiding an element and also removes it from the document layout.
        4. **`visibility: hidden`** hides the element but keeps its space in the layout.
        5. **`opacity: 0`** makes the element invisible but leaves it interactive and in the layout.
        6. **Positioning methods** (like `top: -9999px`) move the element out of view while still keeping it in the document.
        7. **CSS properties** like `height: 0` and `width: 0` reduce the element’s visible area to zero but don't fully remove it from the document.
    - **Form Field Focus and Interactions**
        1. Using custom `:focus` styles (like background changes, border changes, or shadow effects), could conflict with the autofill styling of password fields, making it harder for B5X to correctly identify and fill the fields.
        2. Having `:hover` styles applied to password input fields can interfere with autofilling behaviours. If hover states trigger a CSS change (like a border color change), it might prevent the browser from correctly identifying the autofilled field, or cause unexpected visual behaviours.
        
    
    This short list is not exhaustive and there may other CSS styles that may impact the way a page is displayed, potentially causing issues with the way 1Password is reading the page. For a more comprehensive run down of CSS style properties, I’d recommend checking out the page below:
    
    - [CSS Reference](https://www.w3schools.com/CSSref/index.php)
    
- **Understanding JavaScript**
    
    JavaScript is used on most websites to create dynamic content. This can be anything from media player controls to animating images and other interactive functions. JS is also used to manipulate form fields [**dynamically**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) (e.g., showing/hiding fields, changing attributes, or adding/ removing elements in the moment). This means that JS can impact the overall structure of a form in ways that could interrupt 1Passwords ability to read, navigate and autofill on a page.
    
    - Dynamic Page Content
        
        Most modern websites will use JavaScript to load content dynamically, which may mean that password fields or forms being altered after the initial loading of a page. Thie could mean that 1Password is unable to recognise and autofill fields generated or modified after the page has loaded.
        
    - Manipulation of Form Fields
        
        JS can manipulate and even hide some fields after pages have already loaded, which may lead to 1Password not being able to detect or interact with them.
        
    - Auto-submit Triggers
        
        Some websites may use JS to trigger forms automatically, which can disrupt the autofilling process, including submitting before all information has been correctly input by the user. This could also mean that users don’t have enough to make sure that credentials are being entered correctly.
        
    - Obfuscated or Customised Field Names
        
        Some websites may use JS to alter or obfuscate (hide) `name` or `id` attributes of fields dynamically. Since these attribute labels are relied upon to recognise fields, having these altered may hinder 1Passwords ability to read the page and autofill the fields.
        
    - Cross-origin Restrictions
        
        Some pages may contain resources loaded from different domains (cross-origin content). This could mean that JS is blocking or limiting certain elements, preventing autofilling from working as expected.
        
    - Security Measures
        
        Some websites may use JS to enhance their security measures such as CAPTCHA checks or “honeypots” (unseen fields designed to trap bots), which may cause 1Password to autofill the incorrect fields or trigger an incorrect submission. during the autofilling process.
        
    - Event Listening Interference
        
        Some websites may use JS to attach [**event listeners**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) to form fields, such as `input` or `focus` events. These listeners may perform actions that conflict with 1Passwords ability to autofill such as resetting a field, or forcing focus to another element. 
        
    

---

# Useful Pages

Below are some useful courses or additional resources that you may find useful if you wanted to expand your knowledge. 

https://www.w3schools.com/html/default.asp

https://www.coursera.org/specializations/html-css-javascript-for-web-developers

https://www.udemy.com/course/html-basic-to-advanced/?couponCode=ST1MT31025G3

https://www.theodinproject.com/

https://developer.1password.com/docs/web/compatible-website-design

Another tool you may find useful is how the brain works. The brain document shows the ways 1Password uses different clues to read and autofill the correct information. You can read a much more in-depth explanation of the brain by taking a look at the brain document here → 

REDACTED

## **Glossary**

[**Cascading**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) - ***cascading** means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the colour of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same colour (unless you specify something else)!*

[**Dynamically**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) - *In this context, "dynamically" refers to content or actions that can change or respond in real-time based on user interaction or other factors, without needing to reload the page. For example, JavaScript allows things like updating form fields, animating images, or changing media player controls as users interact with the website.*

[**Event Listeners**](https://www.notion.so/Filling-How-to-interpret-the-Page-Structure-for-troubleshooting-13d12a18962f80c2aa64edbc7b92231f?pvs=21) *- **Event listeners** are functions in JavaScript that wait for specific actions (like clicks, key presses, or mouse movements) to occur on a web page. When the action (event) happens, the event listener triggers a response, like showing a popup or changing an element on the page. For example, clicking a button might trigger an event listener that changes the text on the screen.*