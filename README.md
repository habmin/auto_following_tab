# Load 'Following' tab by default on Twitter

Is 'For You' just not for you? Tired of clicking on the 'Following Tab' every time you load Twitter? Here's a simple extension that just saves you a click, but one that you probably forget to do each time.

## Behavior

- When logging on to `twitter.com/home`, script will wait for page to load first, then select `Following`.
- If logging on to any other section of Twitter, such as `twitter.com/messages` or `twitter.com/notifications`, the script will wait until the user clicks on the `Home` tab, then wait for the `For You`/`Following` tabs to load, then select `Following`.
- Script is designed to work that you have already signed in Twitter before hand. After logging in successfully, refresh the page for the script to activate.
- Doesn't read any sort of Twitter data (literally just telling the DOM to click on the Following tab).
- Tested to be compatible with Firefox 109+ and Chrome 109.0.5414.75+

## Installation
Download by clicking the `Code` button, then `Download ZIP` in the upper right of the repository. 

### For Chrome
1. Extract downloaded folder.
2. Open Chrome and go to `chrome://extensions`.
3. Activate `Developer mode` in the upper right, if not already active.
4. Click on `Load unpacked`.
5. Navigate and select the extracted folder (will be `auto_following_tab-main` by default). (NOTE: Ignore error about `browser_specific_settings`, that's for Firefox to worry about.)

### For Firefox
1. Extract `auto_following_tab_firefox.xpi` from ZIP download.
2. Open Firefox and go to `about:addons`.
3. Click on the Settings/Gear icon and select `Install Add-On From File`.
4. Navigate and select where ever you saved the xpi file. 
5. Confirm by hitting `Add`.
6. Click on the installed extension `Twitter 'Following' Default` to manage permissions.
7. Click on the `Permissions` tab.
8. Enable access for Twitter sites.
9. May have to restart Firefox for settings to take effect.
