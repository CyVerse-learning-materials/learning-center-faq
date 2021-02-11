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

The Discovery Environment 2.0 (DE 2.0) is the same great workbench for data, apps and analyses, but with a new look (interface) so that using CyVerse is even better! The new DE is easier to navigate, to find new features, and to access learning materials and other important information.

----

*What will happen to my data, analyses, results, collaborators, public datasets, etc.?*
==============================================================================================

No changes have been made that affect your data, analyses, results, etc. All your existing data in the Data Store and Data Commons and your apps and analyses can be accessed through the DE 2.0. Any changes you make going forward using either the DE 2.0 or the old DE will be reflected in both versions.

----

*When will the DE 2.0 be available?*
=================================================

The DE 2.0 is available now! Poke around to see what’s new and take a tour: https://sonora.cyverse.org/help

----

*Can I still use the old DE?*
=================================================

Yes, the old DE is still available to use until we deprecate it in Summer 2021. We will announce the sunset date to all users at least 4 weeks in advance. To access the old DE, click here: https://de.cyverse.org

----

*Why do I have to log in again to use VICE in the new DE?*
===========================================================

The prompt to login again for VICE apps is a temporary step until we upgrade VICE apps to use the same authentication service as now used in the DE 2.0.

----

*What do I have to do to access the DE 2.0?*
=================================================

*For existing users, use your account credentials to:*
- Launch the DE 2.0 from its web address: de2.cyverse.org
- Launch the DE 2.0 from our website homepage (top navigation Launch menu)

*For new users:*
- Sign up for an account at CyVerse; you get access to the DE 2.0 and 2 GB of storage with your account
- Next, login to CyVerse to validate your new account and start using DE 2.0

----

*Where can I find more information about DE 2.0?*
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
=================================================

Your existing bookmark to the old DE has not changed, but will update to the DE 2.0 when the old DE is sunsetted in Summer 2021. Please bookmark the DE 2.0 web address: https://de2.cyverse.org

#########################
Data Questions
#########################


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

*If you are a novice*:

    Learn more about the tools used:

    -

----

#########################
Training Questions
#########################

########################
Collaborating
########################

#########################################
Bring Your Own (Data, Compute, etc.)
#########################################


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
