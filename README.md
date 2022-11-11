# Bug report

I am unsure how exactly I was able to create this issue, but it's present in firebase here.

To replicate:
* Run the app: npm install && npm start
* Open the console/debug menu (all the info is outputted in console.log() statements or throwing errors)
* Click the 'sign up' button, this will sign up with the buggy account
* If you click 'sign in' immediately, it will (correctly) deny the sign-in as expected
* But if you wait (ususally 1-3 minutes) and click again, it will sign in fine- with emailVerified set to true even though none of the code changed it

You can try deleting the account and re-doing the process and get the same result. Also try changing the
email- this likely won't happen with another account (I haven't been able to replacicate the issue with other emails)

Notes:
* The firebase project I made for this is only for this bug report, I can give permission to do whatever is needed within the project since there's no real data in it
* I made another firebase project and tried this same app (no code change, same email) and the issue wasn't present, so it seems to be an issue with how auth emails are sored server-side
* Both times i've been able to make this issue it was on this test email (18rem8@queensu.ca) and I was doing a lot of creating, signing in, deleeting an account, etc on the same email
