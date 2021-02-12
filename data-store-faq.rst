.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon|_
`Learning Center Home <http://learning.cyverse.org/>`_

******************
Data Store FAQ
******************

###############
Managing data
###############

*What if I need more space (storage) in the Data Store*
========================================================

Typically, every user has a 100GB allocation in the Data Store. You can
request more space by completing an |Allocation Increase Form|.

----

###############
Sharing data
###############

*How do I publish a large set of public data?*
==============================================================

If you need assistance transferring a large dataset to CyVerse, please contact
CyVerse Support (support@cyverse.org or use the blue Intercom icon |Intercom| at
the bottom right). For more information on our policies, see
CyVerse's |Collaboration Policy| and |Data Management Policy|. For more information
on using data at CyVerse, see the |Data Store Guide|.

----

*What public datasets are in CyVerse?*
========================================================

CyVerse provides web access to its public datasets. Because the CyVerse Data
Store underlies all CyVerse services, the public datasets may also be accessed
through the Discovery Environment, Atmosphere, the Science APIs and iCommands.
For more information on using data at CyVerse, see the |Data Store Guide|.

----

*How do I request a Community Released Data Folder?*
========================================================

Community Released Data folders are available for evolving datasets that
individuals or communities want to make available as quickly as possible for
research and reuse, especially within CyVerse analysis platforms. Community
Released Data folders are intended for datasets that are growing or changing
frequently or that may not need long-term preservation.

Before you request a folder, please read this wiki article
|Publishing Data through the Data Commons|, and this one
|Preparing Community Released Data Folders|.

Then, if you meet the criteria, you can request a folder using this
|Request for Community Released Data Folders Form|.

----

*How do I connect to a shared or public folder with CyberDuck?*
====================================================================================

If you follow the default configuration for |Cyberduck| you will automatically
be connected to your home directory (/iplant/home/$your_user_name). However,
you can also open a new connection to any directory to which you have access
permission. This includes folders that other users have shared with you,
or public folder, such as those under /iplant/home/shared.

To do this read the instructions below:

.. admonition:: Expand to read more

    **Open a connection to a public folder**

      1. Open CyberDuck
      2. If the browser is not already open, select File - New Browser
      3. Create a new connection by clicking on the + in the lower right
    	   (next to the pencil and minus sign)
      4. In the top dropdown menu, select iPlant Data Store
      5. In the dialog box, name your connection something relevant, like the name
    	   of the folder you want to browse to
      6. Enter your user name in the appropriate field. If you are connecting to
    	   public folder, you can also enter anonymous in this field
      7. In the Path field, enter /iplant/home/shared, or some subdirectory.
      8. Close the dialog window. Now, in your list of connections, you should see
    	   a new connection with the name you chose. Click on that, and you should go
    		 directly to the public folder.

    Once you are connected to /iplant/home/shared, you can browse down to any
    sub-directory.

      .. warning::

    	  DO NOT try to browse up to /iplant/home/ because it contains >50,000 folders
    		(one for each CyVerse user) and it will hang up.

    **Open a connection to a private folder that is shared with you**

    Follow the same steps as above, except in step 7, enter the path to the folder
    that was shared with you. For example, if user "janedoe" shares a folder called
    "data" with you, enter `/iplant/home/janedoe/data` in the Path field. You cannot
    connect as anonymous in this case, and must supply your own user name.
    See also: |Cyberduck| documentation.

----

*How do I make a folder public with iCommands?*
========================================================

Although you can share files and folders in the DE and create public links,
you must use iCommands make them visible to everyone. Permissions are set in
iCommands by using ichmod (https://docs.irods.org/4.2.1/icommands/user/#ichmod).

To make a folder public, you give read permission to two users: 'public'
(anyone signed in with a CyVerse account) and 'anonymous' (anyone on the web -
no sign in required).

To recursively make a shared folder called 'myfolder' public, use the
instructions below

.. admonition:: Expand to read more

      .. code:: bash

         ichmod -r read public /iplant/home/shared/myfolder
         ichmod -r read anonymous /iplant/home/shared/myfolder

    To remove public access to the folder, use:

      .. code:: bash

         ichmod -r null public /iplant/home/shared/myfolder
         ichmod -r null anonymous /iplant/home/shared/myfolder

    See also our |iCommands documentation|.



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

.. |Allocation Increase Form|  raw:: html

   <a href="https://user.cyverse.org/forms/2/overview" target="blank">Allocation Increase Form</a>

.. |Collaboration Policy|  raw:: html

   <a href="http://www.cyverse.org/collaboration-policy" target="blank">Collaboration Policy</a>

.. |Data Management Policy|  raw:: html

   <a href="http://www.cyverse.org/data-management-policy" target="blank">Data Management Policy</a>
