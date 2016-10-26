<div id="D-Entire-document">
<h2>Integrating VAST Video Ads using JavaScript Ad Tags, with Unity</h2>
   <p>This is the glue code needed for the unity code to communicate with the minimob ad-serving module code.</p>
<h3>How to use</h3>
   <p>To use this, you must also clone/download the ad-serving module in the same folder as this repository.</p>
<blockquote>Use the default folders name, so that it can be found by this module.</blockquote>
   <p>A demo app for Unity that uses this plugin can be found <a href="https://github.com/minimob/video-ad-demo-unity" target="_blank">here</a>.</p>
   <p>The ad-serving module can be found <a href="https://github.com/minimob/video-ad-serving-android" target="_blank">here</a>.</p>
   <p>After you open the project with Android Studio, two modules will show up, minimob-adserving and minimob-adserving-unityplugin.</p>
   <p>For each of them execute an assembleRelease build task and copy the aar file from each module's build/outputs/aar folder, and paste it into the Assets/Plugins/Android folder of your Unity project.</p>
<blockquote>NOTE: For Unity to build your project you must remove the /lib/classes.jar file from the minimob-adserving-unityplugin-release.aar file.</blockquote>
   <p>You can do that by opening the file using a zip application (ex: 7-zip) and deleting the classes.jar file from the lib folder.</p>
</div>
