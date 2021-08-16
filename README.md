# AmazonPhotosTrashRestoreAll
A small JS script to be ran in browser while viewing your trash folder that will loop through and select all photos so they can be restored

I unselected a folder using selective sync in Amazon Photos. All of my photos for the last 5 years...Amazon Photos removed all of them from my HDD and treated them as a cloud delete.

Fortunately this lands all your stuff into the amazon.com/photos/trash folder. UNFORTUNATELY there is no restore all option so you're potentially looking at painstakingly manually restoring thousands and thousands of files and you've only got 30 days to do it...

This little script will help you: 

Copy the contents of restoreAll.js https://github.com/Steji/AmazonPhotosTrashRestoreAll/blob/main/restoreAll.js

Open the your Amazon trash folder in the browser

Press F12 to open the developer tools

Click console

Next to the chevron (>) paste the contents of restoreAll.js

Press enter

It will scroll through all the photos in there selecting them automatically, the limit is 3000 per restore (enforced by Amazon) so once it hits this threshold it will stop and you can press restore. Refresh the page and repeat until they are all restored.

If you need to manually stop the script for any reason type restoreSelectionLoop = 100 in the console (>)

Unfortunately I can't get it to restore for you but this should save you a few button clicks!

https://gitcoin.co/tip?username=steji

Ethereum Address: 0x249AbC9E53955B0d1F9D3DBD66bB741425Dc728B
