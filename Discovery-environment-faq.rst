.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon|_
`Learning Center Home <http://learning.cyverse.org/>`_

*************************
Discovery Environment FAQ
*************************

###################################
Discovery Environment 2.0 Release
###################################


*What is changing in the Discovery Environment?*
=================================================

The Discovery Environment 2.0 (DE 2.0) is the same great workbench for data, apps and analyses, but with a new look (interface) so that using CyVerse is even better! The new DE is faster and easier to navigate, has new and upgraded features, and provides a semi-customizable dashboard. You can use the DE 2.0 right now for:
- Data: upload, create new files and folders, share with collaborators
- Analyses: run and share analyses and workflows
- Notifications: get status notifications of your uploads, jobs, results, etc.

Important Note: Some existing DE functions won't be fully operational in the DE 2.0 until Summer 2021; please see the question "*Can I still use the old DE?*" for specific operations/tasks for which you must continue to use the old DE.

----

*What will happen to my data, analyses, results, collaborators, public datasets, etc.?*
=========================================================================================

No changes have been made that affect your data, analyses, results, etc. All your existing data in the Data Store and Data Commons and your apps and analyses can be accessed through the DE 2.0. Any changes you make going forward using either the DE 2.0 or the legacy DE will be reflected in both versions.

----

*When will the DE 2.0 be available?*
======================================

The DE 2.0 is available now! Poke around to see what’s new and take a tour: https://de.cyverse.org/help

----

*Can I still use the old DE?*
==============================

- Yes, the old DE is still available to use until we turn it off on July 6, 2021.
- Please use the legacy DE for some functions that are not yet fully operational in DE 2.0, such as:
- - Communities: adminstrating, managing, and browsing
- - Teams: request to join a team and notifications related to your request
- - Requesting access to Visual Interactive Computing Environment (VICE) apps
- To access the old DE: https://legacy-de.cyverse.org

----

*What do I have to do to access the DE 2.0?*
=============================================

*For existing users, use your account credentials to:*
- Launch the DE 2.0 from its web address: https://de.cyverse.org
- Launch the DE 2.0 from our website homepage (top navigation Launch menu)

*For new users:*
- Sign up for an account at CyVerse; you get access to the DE and 2 GB of storage with your account
- Next, login to CyVerse to validate your new account and start using the DE

----

*Where can I find more information about the new DE?*
===================================================

- Take the product tour in the DE 2.0
- View a short |DE 2.0 Webinar| demonstration
- Read the Learning Materials documentation (add public link)

----

*What if I have problems finding my data, analyses, folders, etc.?*
======================================================================

- Take the DE 2.0 product tour which explains each of the icons on the DE 2.0 dashboard
- Use the help icon in the upper right corner
- Email us at support@cyverse.org

----

*What will happen to my DE bookmark?*
=======================================

Your existing bookmark to the old DE has not changed, but will update to the DE 2.0 when the old DE is sunsetted July 6, 2021. Please bookmark the DE 2.0 web address: https://de.cyverse.org


#########################
Analyses Questions
#########################

*Why has my job failed or been running forever?*
=================================================

The following recommendations can help you determine what went wrong and collect
information for CyVerse staff in case you cannot resolve the problem yourself.

  .. admonition:: Expand to read more

    **Common things to check when troubleshooting an analysis**

    - View the app's parameters to make sure you used the correct input files and
      settings
    - Read through the app's documentation page
    - It also may be helpful to read through documentation about the tool that
      was used to create the app. Check the app's documentation page to see if
      a link was provided. If no link was provided, you can find specifics about
      the tool that was used and search for more information on the web.
    - Avoid the use of special characters and spaces in analysis names, file
      names, and folder names when submitting an analysis through the DE
      (e.g. ~ ` ! @ # $ % ^ & * ( ) + = { } [ ] | \\ : ; " ' < > , ? / and
      spaces)

    **Getting Help with an analysis**

    If you know that an analysis typically completes in 20 minutes but you have
    one that still shows Running status 24 hours after you submitted it, the app
    used for the analysis seems to have a problem, or you didn't get any output
    files or the output files were not what you expected, you can submit a
    request for help directly in the Analyses window. The status of the analysis
    determines the Help information that is displayed.

    - In the Analyses window, find the analysis with the possible issue
    - Click the name of the failed analysis whose outputs you want to view
    - Review the suggestions for review
    - If you still need assistance, click I still need help and complete the form
    - Please go through all the troubleshooting steps yourself before requesting
      help. The problem is often something that you can diagnose yourself

    **Checking Log files for error**

    One of the main tools available for troubleshooting a failed analysis is the
    set of log files that are returned with each completed or failed analysis.
    These log files contain important information about the analysis, such as
    the settings that were used, files you used, and, in the case of a failed
    analysis, information to help explain why the analysis failed.

    Because different apps are based on different tools, there is no standard
    method used for error reporting, so the same type of error may land in
    different log files. For example, one app may return errors to the stdout
    files (usually the screen, although it can be redirected and is generally
    captured in a log file here), while another saves its errors to the stderr
    files (which usually writes to a file, but can also be redirected). This
    means you may well have to look in more than one log file when
    troubleshooting a failed analysis.

    The log files that most commonly contain error information are (numerals in
    the filename correspond to the step number that was logged in your analysis
    ):

    - ``condor-stderr`` and ``condor-input-stdout`` log files contain errors and
      details about Condor, the batch manager program that handles the
      execution of your analyses submission in the analyses queue.
    - ``condor-input-stderr`` and ``condor-input-stdout`` files contain details
      about outputs from the tool upon which the app is based.


----

*How do I get help with a tool (app) or workflow?*
====================================================

The steps to get help depend on whether you’re a novice or an expert with the
tool—executable or binary—on which the app or workflow is based.

**If you are a novice:**

    #. Learn more about the tools used:

    - Search the internet for the publication describing the tool and any related documentation.

    - Make sure you understand what the tool is designed to do, what inputs it can accept and in which format, and how to set any parameters.

    #. Search the internet for informative sites in your domain. For example, [SEQanswers](http://seqanswers.com) is the go-to online forum for the next-generation sequencing community.

    #. Talk with someone at your institution who is more experienced with the tool.

    #. Try to use the app in the Discovery Environment. Click ![infoicon](docs/images/InfoIcon.jpg) next to the app name to view the app manual and its sample test input files and expected outputs.

**If you are experienced with the tool or workflow:**

    If you are experienced with the tool or workflow and need advice for how to work with very large-scale data or a complex workflow, you may request community support or [Extended Collaborative Support](http://www.cyverse.org/collaborate).

----

*Why is my analysis sitting in the Submitted state for so long?*
==================================================================

Analyses that use an app that runs on an HPC system can remain in the Submitted state for hours or even days. They may sit in in the queue in Submitted state waiting to run, along with other possibly long-running jobs that were in the queue first. Therefore, it may take several days for your analysis to get its turn to run. Once your analysis runs, its results will be returned to the Data Store and the DE status will change to Completed.

----

*Is there a limit to how many analyses (jobs) I can run at the same time in the Discovery Environment?*
===============================================================================================================

Only 8 of your analyses will run at the same time. It’s fine to launch more, but they will not run until some of your analyses have completed.

----

*I’m trying to run an analysis, but when I enter an input I can’t see my files. Why? I know they are there.*
================================================================================================================

Because the app requires a *folder* as input, not a *file*, the files don’t show since they aren’t the appropriate inputs for the app. The files are indeed there but don’t show. Check the app’s input box; if it says “Select a folder”, then it requires a folder input. Put the file(s) you want to input into a folder and then use that folder as input. Note: You can use Drag and Drop to input the folder by finding it in the Data window, making sure the folder name is shown in the center panel, and then `dragging <https://wiki.cyverse.org/wiki/display/DEmanual/Moving+a+Data+File+or+Folder#MovingaDataFileorFolder-DragDrop>`_ the folder into the app’s input box.

----

*How do I rerun a job I previously ran in the DE, but change some parameters or use a different input?*
================================================================================================================

You can easily relaunch the same analysis with different settings:

  #. In the Analyses window, click the app name in the App column for the analysis to rerun.
  This opens up an app window for that app, which is already configured with the inputs and settings you used for the previous analysis run.
  #. Change settings or inputs as needed.
  #. Click **Launch Analysis** to launch the new analysis.

`Learn more here.<https://wiki.cyverse.org/wiki/pages/viewpage.action?pageId=11446455#Analyses%20Menu:%20View%20Outputs,%20Parameters,%20and%20Info;%20Relaunch,%20Cancel,%20and%20Delete-Relaunch>`_

----

*How do I run the same analysis on a number of files most efficiently?*
=========================================================================

You can create a file that contains a list of up to 16 files to use as input for high-throughput and batch file execution. Such a file is called an HT Analysis Path List file. Learn more `here <https://wiki.cyverse.org/wiki/display/TUT/Parallel+execution%2C+DE+%28Discovery+Environment%29+style>`_, and if you still have questions, read `here <https://pods.iplantcollaborative.org/wiki/display/DEmanual/Creating+New+Files+and+Folders#CreatingNewFilesandFolders-HTanalysispathlist>`_.

----

*I have a series of files that need to be analyzed by the same app, but the output files all have the same name. How do I distinguish them so I can use them in a workflow?*
=========================================================================================================================================================================================

You can avoid confusion by finding the output folder in your Data list and `renaming <https://wiki.cyverse.org/wiki/display/DEmanual/Renaming+a+Data+File+or+Folder>`_ each output file with a unique name. After renaming the output files, you can then use them together in a step of the analysis workflow.


#####################
Data Questions
#####################

*How do I share data files and folders in the Discovery Environment?*
======================================================================

**To share a file or folder with a CyVerse user:**

  #. Click the checkbox for the file or folder to share.
  #. Click ![shareicon](docs/images/ShareViaDEicon.jpg) in the row for the item.
  #. Begin entering the name in the search field and then select the user.

**To create a public link to a file** (not for folders) with someone who doesn’t have an account:

  #. Click ![linkicon](docs/images/shareviapubliclinkicon.jpg) in the row for the file.
  #. Copy the link, and click **Done**.
  #. Send the link.

Learn more at `Sharing Files and Folders <https://wiki.cyverse.org/wiki/display/DEmanual/Sharing+Files+and+Folders>`_.

----

*When sharing a file or folder, what permission should I give to my collaborator?*
===================================================================================

It depends on what you want to allow the collaborator to do with the file or folder. Options are read, write (ability to edit the file or folder), and own (in addition to edit, can also delete and move; use this permission with caution). Learn more `here <https://wiki.cyverse.org/wiki/display/DEmanual/Changing+and+Viewing+Data+Permission+Levels+in+the+DE>`_.

----

*Why can’t I rename or delete files in a folder that has been shared with me?*
===================================================================================

To rename a file or folder, you must have “write” permission, and to delete a file you must have “own” permission. To check the permission you have, click the checkbox for the item and look at the Permissions shown in the Details panel on the right. Contact the person who shared the file or folder with you if they did not give you the necessary level of permission. Learn more at `Changing and Viewing Data Permission Levels in the DE <https://wiki.cyverse.org/wiki/display/DEmanual/Changing+and+Viewing+Data+Permission+Levels+in+the+DE>`_.

----

*How can I manage shared files and folders for my lab group or project?*
===================================================================================

See `Setting Up a Shared Directory for a Lab or Project <https://wiki.cyverse.org/wiki/display/DC/Setting+up+a+shared+directory+for+a+lab+or+project>`_.

----

*Why doesn’t anything happen when I move a folder I own to the trash?*
===================================================================================

If the folder has hundreds of files, it can take several hours for the deletion to complete in the DE. Please be patient and try refreshing your browser periodically. You cannot delete 1000 files or more in the DE. You must `use iCommands <https://wiki.cyverse.org/wiki/display/DS/Using+iCommands>`_ instead. Note that deleted files may still show up in the search for awhile, but eventually will be fully purged from the system.

----

*Can I have spaces in file and folder names?*
===================================================================================

No. Do not use spaces or special characters in file or folder names as they can cause analyses to fail. `Learn more here <https://wiki.cyverse.org/wiki/display/DEmanual/Using+Special+Characters+in+the+DE>`_.

----

*Can I view my files in a genome browser?*
===================================================================================

You can view bam, vcf, and gff genome files you own in the genome browsers at Ensembl, UCSC, IGV, GBrowse, and jbrowse, and view Fasta genome files in CoGe. Learn more about viewing genome files in `a genome browser <https://wiki.cyverse.org/wiki/display/DEmanual/Viewing+Genome+Files+in+a+Genome+Browser>`_ or in  `CoGe <https://pods.iplantcollaborative.org/wiki/display/DEmanual/Viewing+Genome+Files+in+CoGe>`_.


###########################
App Questions
###########################


*How do I share an app in the Discovery Environment?*
======================================================

You can share an app or workflow with the general public or just with specific users by following the steps described at `Sharing Your App or Workflow and Editing the User Manual <https://wiki.cyverse.org/wiki/display/DEmanual/Sharing+your+App+or+Workflow+and+Editing+the+User+Manual>`_.

----

*Why can’t I find a Discovery Environment app?*
======================================================

There are two common reasons why an app is not “visible” or doesn’t come up in search in the Apps list:

  * The app may be an HPC (high-performance computing) app, which is only displayed after you have logged in to Agave, where the HPC apps are stored. To do so, click the **HPC** tab in the Apps window and enter your CyVerse username and password.
  * The app may not yet be public, or the app owner may not have shared the unpublished app with you. Check with the owner to see if it is indeed shared with you or public.

If you still can’t find the app, it’s possible it has been deprecated. If an app is no longer returned in a search query, `search <https://wiki.cyverse.org/wiki/display/DEmanual/Searching+for+an+App+or+Workflow#SearchingforanApporWorkflow>`_ for an app with a similar name or one that uses the same tool, topic, or operation. If you are the app integrator and need the app returned to the catalog, `contact Support (support@cyverse.org) <mailto:support@cyverse.org>`_ for assistance. `Learn more about deprecated apps <https://wiki.cyverse.org/wiki/display/DEmanual/Using+the+Apps+Window+and+Submitting+an+Analysis#UsingtheAppsWindowandSubmittinganAnalysis-ArchivedApp>`_.

----

**Fix or improve this documentation**

- Search for an answer:
  |CyVerse Learning Center|
- Ask us for help:
  click |Intercom| on the lower right-hand side of the page
- Report an issue or submit a change:
  |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_


----

|Home_Icon|_
`Learning Center Home <http://learning.cyverse.org/>`__

.. Comment: Place Images Below This Line
   use :width: to give a desired width for your image
   use :height: to give a desired height for your image
   replace the image name/location and URL if hyperlinked


 .. |Clickable hyperlinked image| image:: ./img/IMAGENAME.png
    :width: 500
    :height: 100
 .. _CyVerse logo: http://learning.cyverse.org/

 .. |Static image| image:: ./img/IMAGENAME.png
    :width: 25
    :height: 25



.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/learning-center-faq" target="blank">Github Repo Link</a>

.. |Data Store Guide section on sharing|  raw:: html

   <a href="https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step4.html" target="blank">Data Store Guide section on sharing</a>

.. |Creating Group Projects|  raw:: html

   <a href="https://cyverse-group-project-quickstart.readthedocs-hosted.com/en/latest/" target="blank">Creating Group Projects</a>

.. |DE 2.0 Webinar|  raw:: html

      <a href="https://cyverse.org/webinar_NewUI_Preview" target="blank">DE 2.0 Webinar</a>
