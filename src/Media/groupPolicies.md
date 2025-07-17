# Understanding Group Policies for Native Messaging

Owner: Katie Roberts

Verification: Expired

# Overview

The primary goal of this guide is to explain the critical relationship between [**Group Policies**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) and [**Native Messaging**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21), and how this relationship can directly affect B5X functionality. It also provides troubleshooting steps and examples, focusing on scenarios where Group Policies interfere with the performance of Native Messaging. The beginning of this document will outline what Group Policies are and how they may affect Native Messaging. The final section will provide an example of how we can tell that there may be Group Policies negatively impacting the function of B5X by the information provided by the users. 

## **What are Group policies?**

**Simple:** These are the rules set by a company that tells your device and software what it can, and cannot do.

**Extended:** Group Policies are a tool used in Windows environments to centrally manage user settings, application configurations, and security policies across a network of computers. 

- macOS Equivalent
    - **Configuration Profiles:** These are [**XML files**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) that define settings for users or groups of users. They can be used to manage a wide range of settings, including network configurations, app restrictions, and security policies.
    - **Managed Software:** macOS provides built-in tools for deploying and managing software, including app store apps and in-house developed applications.
- Linux Equivalent
    - **Systemd Units:** Systemd, the default init system in many Linux distributions, uses units to manage services, devices, and timers. These units can be configured to set various system-wide settings.
    - **PAM (Pluggable Authentication Modules):** PAM is a framework that allows different authentication mechanisms to be plugged into applications. It can be used to enforce password policies and other security measures.
    - **Local User and Group Management:** Linux administrators can directly manage user and group accounts, permissions, and other settings using tools like `useradd`, `passwd`, and `groups`.

**How:** Group policies are implemented using [**Active Directory.**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) This is a Microsoft service that helps manager users devices and network resources across Windows domain networks. Using Group Policies allowed administrator to enforce consistent policies, streamline user management and enhance security.

## **What is Native Messaging (NM)?**

**Simple:** Native messaging is a communication procedure that enables web applications to interact directly with native applications on the same device.

**Extended:** This communication procedure is achieved by establishing a secure channel that bypasses the browser’s security [**sandbox**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) , enabling the exchange of data and commands between the two applications.

NOTE: Whilst Safari doesn’t support native messaging in the same fashion, it does support [**WebSocket API**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21). 

- NM in Chrome
    - Supported through the `chrome.runtime` API.
    - `chrome.runtime` - A way for web applications to send and receive messages to and from native applications.
    - [**WebSocket API**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) support - Similar to NM WebSocket APIs are is used for real-time communication, however this communication is between web applications and servers.
- NM in Brave
    - Supported through the `navigator.serviceWorker.register` API.
    - Allows web apps to register service workers that can communicate with native apps using the `postMessage` method.
    - [**WebSocket API**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) support.
- NM in Firefox
    - Supports native messaging through the  `moz-nativemessaging` API.
    - [**WebSocket API**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) support
- NM in Edge
    - Supports native messaging through the `chrome.runtime` API, since it’s also Chromium based.
    - [**WebSockets API**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) support

---

# How Group Policies can affect Native Messaging

Group Policies can have an impact on the functions of Native Messaging by controlling various system settings, from affecting the behaviour of both web and native applications, Group Policies can also impact their ability to effectively communicate.

**How?**

- Security Restrictions
    - Group Policies can create firewall rules to block or allow specific network connections, including those used by Native Messaging.
    - Group Policies can be used to enable whitelists of approved applications that are allowed to fun on a system. If the native app isn’t included in this whitelist, it will prevent communication through Native Messaging.
    
- Application Control
    - Group Policies can prevent installation of  specific apps, including web and native. If an app installation is blocked, Native Messaging may not operate to the expected level.
    - Group policies can control user permissions, meaning users may not be able to successfully interact with web or native apps.
- Network Settings
    - Group Policies can enforce proxy servers to route network traffic through specific intermediaries, which, when not configured correctly or as expected, can cause communication issues between web and native applications.
    - Group Policies are associated with domain-joined devices. This means that if a computer is not joined to a domain correctly, the settings may not be applied.
- Registry Settings
    - Group Policies can modify registry settings that are used by Native Messaging. If these are altered, admins can control the behaviour of Native messaging, including enabling or disabling specific features or changing communication procedures.

# How do Group Policies potentially impact 1Password

There are a number of ways that Group Policies can impact the performance or function of 1Password in particular, so it’s important to consider these. A few can be found below:

- Centralised Device Management
    
    Some companies may deploy the 1Password desktop app or browser extension across their organisation. Through this deployment, 1Password can also be successfully integrated with other enterprise systems, such as [**single sign-on solutions (SSO).**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21)
    
    ### **Useful pages:**
    
    - https://support.1password.com/deploy-1password-browser/
    - https://support.1password.com/deploy-1password/
    - https://support.1password.com/sso/
- Strong Security
    
    Group Policies can enforce more strict password policies including requiring strong passwords and the use of MFA. Amongst many other security based policies, they can also ensure that their employees are only installing the necessary, and authorised apps and software on their devices. You may also run into issues where 1Password is force installed across a company, but not all employees use or have access to 1Password. 
    
    ### **Useful pages:**
    
    - https://chromeenterprise.google/intl/en_uk/policies/
    - https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies
    - https://support.mozilla.org/en-US/kb/customizing-firefox-using-policiesjson
    - https://support.brave.com/hc/en-us/articles/360039248271-Group-Policy
    - https://learn.microsoft.com/en-us/mem/intune/protect/compliance-policy-create-mac-os
    

## Potential Symptoms

There are many ways in which a user may describe 1Password as not working in their browser, that may lead us to believe that Group Policies are interfering with the function of B5X. The main thing to look out for is that the user is typically using a work managed device or browser, and are generally part of a Business or Teams account.

**Some examples are:**

- B5X becoming uninstalled daily
- Needing to sign in or go through the “Welcome” page to set up their browser extension daily or very frequently.
- SLS not working despite all settings being correct and standard SLS troubleshooting.
- Seeing offline indicator icons.

This list is not exhaustive but are some of the most common ways this issue is reported to us.

## **Example and Case Study**

Under the `Browser Policies` section below, you’ll see an example of a ticket sent int by a business user. 

- Browser Policies
    - 1Password employs native messaging as its secure method of communication between the app and the browser extension, some browser policies can block the native messaging between OPH and b5x.
    - If this is the case you may see the below error in the DR/Console log:
    `Desktop app port disconnected. Error: Specified native messaging host not found.`
    - The next steps would be to ask the user to send over the policies and if you see a result for `NativeMessagingUserLevelHosts` with a value set to `false` ask them to contact their IT team as this needs to be set to `true` for SLS to work. You can find the steps here: [If the 1Password browser extension doesn't unlock when you unlock the 1Password app](https://support.1password.com/connect-1password-browser-app/#if-your-computer-is-managed-by-your-organization)
    - Case study example:
        - REDACTED
        
        In this example, the user is having SLS issues due to a browser policy blocking native messaging. Here is how we may troubleshoot this:
        
        1. The user writes in to let us know that their browser extension is not connecting to their 1Password app.
        2. Using the details provided we can confirm that this is true in this case the user has already shared a diagnostics report with us so we can take a look at this and see the error:
            
            **`Desktop app port disconnected. Error: Specified native messaging host not found.`**
            
            If the user hasn’t already shared a diagnostics report we may start with some of the steps in [this guide](https://www.notion.so/6a4dc6e87eaa4c85844e36057813e837?pvs=21) before asking depending on the information we already have.
            
        3. This error suggests that something is blocking native messaging. We all see that this user is Business user so it’s likely that they are using a managed browser profile with policies in place.
        4. To check this we ask the user to visit chrome://policy/  in their browser and if they see any policies listed here we will ask them to export to a JSON file and attach them to their next reply.
        5. Within the policy file we are looking for a **`NativeMessagingUserLevelHosts`** policy. In this case we see:
            
            ```json
            "NativeMessagingUserLevelHosts": {
            "level": "mandatory",
            "scope": "machine",
            "source": "platform",
            "value": false
            ```
            
        6. If the policy has the value of **`NativeMessagingUserLevelHosts`** set to **`false`**. With that policy in place, 1Password won't be able to use its native messaging communication protocol correctly, and the app integration features won't work.
        7. In order for this to work we need to let them know that this policy needs to be either set to **`true`** or alternatively they can remove the policy. They may need to ask their IT team for assistance for this step.
        8. Once they have done this they can check that 1Password in the browser can now successfully communicate with their 1Password app.

# Glossary

[**XML Files**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) *- **XML (eXtensible Markup Language)** files are text-based files used to store and transport data in a structured format. They use custom tags to define elements and attributes, making it easy for both humans and machines to read and interpret the data. XML files are often used for data exchange between different systems, such as in web services or configurations.*

[**Sandbox**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) *-  In this context, the term "sandbox" refers to a security mechanism within web browsers that isolates and restricts the actions of applications (like websites or scripts) to protect the user's system and data. The browser’s sandbox ensures that these applications can’t interfere with the rest of the computer, access sensitive files, or perform harmful actions.*

[**WebSocket**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) *- A WebSocket API allows real-time, two-way communication between a client (like a browser) and a server, enabling instant data exchange without needing to refresh or reconnect.*

[**Active Directory**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) *- Microsoft's Active Directory is a system that manages and organises users, computers, and resources in a network, allowing centralised control of security and access.*

[**Single sign-on solutions (SSO)**](https://www.notion.so/Understanding-Group-Policies-for-Native-Messaging-13e12a18962f807fa3ccd7c1b8594410?pvs=21) *- SSO (Single Sign-On) allows users to log in once and access multiple applications or services without needing to re-enter their credentials each time. some examples include signing in with Okta, Microsoft or Google account.*