.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse logo|_

|Home_Icon|_
`Learning Center Home <http://learning.cyverse.org/>`_

**CyVerse FAQ**
===================

Goal
----

These are frequently asked questions for a variety of CyVerse platforms and
other services.

.. toctree::
	:maxdepth: 2

	CyVerse FAQ <self>

----


**CyVerse Discovery Environment**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

----

**CyVerse VICE**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

----

**Data Store and Data Services**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*How do I request a Community Released Data Folder?*
``````````````````````````````````````````````````````

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


*How do I connect to a shared or public folder with CyberDuck?*
````````````````````````````````````````````````````````````````

If you follow the default configuration for |Cyberduck| you will automatically
be connected to your home directory (/iplant/home/$your_user_name). However,
you can also open a new connection to any directory to which you have access
permission. This includes folders that other users have shared with you,
or public folder, such as those under /iplant/home/shared. To do this:

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


*How do I make a folder public with iCommands?*
`````````````````````````````````````````````````

Although you can share files and folders in the DE and create public links,
you must use iCommands make them visible to everyone. Permissions are set in
iCommands by using ichmod (https://docs.irods.org/4.2.1/icommands/user/#ichmod).

To make a folder public, you give read permission to two users: 'public'
(anyone signed in with a CyVerse account) and 'anonymous' (anyone on the web -
no sign in required).

To recursively make a shared folder called 'myfolder' public, use the following
commands:

  .. code:: bash

     ichmod -r read public /iplant/home/shared/myfolder
     ichmod -r read anonymous /iplant/home/shared/myfolder

To remove public access to the folder, use:

  .. code:: bash

     ichmod -r null public /iplant/home/shared/myfolder
     ichmod -r null anonymous /iplant/home/shared/myfolder

See also our |iCommands documentation|.




----

**Atmosphere**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

----

**Other CyVerse Services**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*How do I apply for an external collaborative partnership?*
````````````````````````````````````````````````````````````

External Collaborative Partnerships (ECP) pair members of the CyVerse user
community with expert staff members to address the computational needs of a
scientific project. Requests are reviewed on an ongoing basis.

The criteria by which ECPs are reviewed are available here: |ECP criteria|.

To help you prepare for the |ECP application|, the questions on the form are
listed below.

**External Collaborative Partnership Questions**

See the full list of questions below

.. admonition:: Expand to read more
  :name: Expand to read more

			- Project Principal Investigator (PI)
			- Institution
			- Collaborating Personnel

				- Provide a detailed list of students, technicians, infromaticians and/or
				  developers who will be able to assist with project design and
				  implementation, their respective computational science skill sets
				  (e.g., web design, Python, GWAS, etc.), and their specific time
				  commitments during the project (e.g., 1.5 hrs/day).
			- Previous Interactions with CyVerse
			- Funding sources
			- Project title
			- Project description
			- Please summarize your proposal’s activities and desired outcomes (500 chars or less)
			- Scientific description

				- Provide a scientific description of your project. Describe how the
				  proposed project is within the scope of CyVerse’s scientific Enablement
				  Vision. Illustrate how any resulting deliverables have the potential to
				  enable science for scientists beyond your immediate network of
				  collaborators.

			- Technical Description

				- Provide a technical description of your project. What is the computational
				  need that is to be addressed with assistance from CyVerse? Identify
				  specific potential deliverables to be implemented using CyVerse
				  technologies, such as the Discovery Environment, Atmosphere, APIs, or
				  Data Store.
			- Timeline and Milestones for Completing the Project

				- provide a timeline of specific monthly milestones (deliverables). Projects
				  of short duration (~2 months) should provide weekly milestones.


			- Scientific and Technical Impact

				- Describe how the success of this collaboration will benefit your project
				  and the broader community.

			- Communication and Sharing Plan

				- Will you be making the data and/or workflows publicly available through CyVerse?
				- Blogging and/or tweeting about the work?
				- Presenting at institution or professional conference?
				- Will you be giving a talk about your work at your institution or at a professional conference?
				- Writing a news article for the CyVerse website?
				- Will you be preparing a tutorial that uses the datasets or workflows?
				- Will you be leading a workshop(s) or webinar(s) to teach others to use the data or workflow(s)?
				- Do you have any other communication plans?




Additional information, help
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

..
    Short description and links to any reading materials

Search for an answer:
|CyVerse Learning Center| or
|CyVerse Wiki|

Post your question to the user forum:
|Ask CyVerse|

----

**Fix or improve this documentation**

- On Github: |Github Repo Link|
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


.. |Download Cyberduck| raw:: html

   <a href="https://cyberduck.io/" target="blank">Download Cyberduck</a>

.. |Request for Community Released Data Folders Form| raw:: html

   <a href="https://user.cyverse.org/forms/7/overview" target="blank">Request for Community Released Data Folders Form</a>

.. |Publishing Data through the Data Commons| raw:: html

   <a href="https://wiki.cyverse.org/wiki/display/DC/Publishing+Data+through+the+Data+Commons" target="blank">Publishing Data through the Data Commons</a>

.. |Preparing Community Released Data Folders| raw:: html

   <a href="https://wiki.cyverse.org/wiki/display/DC/Preparing+Community+Released+Data+Folders" target="blank">Preparing Community Released Data Folders</a>

.. |Cyberduck| raw:: html

   <a href="https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step1.html" target="blank">Cyberduck</a>

.. |iCommands documentation| raw:: html

   <a href="https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step2.html" target="blank">iCommands documentation</a>

.. |ECP application| raw:: html

   <a href="https://user.cyverse.org/forms/3" target="blank">ECP application</a>

.. |ECP criteria| raw:: html

   <a href="http://www.cyverse.org/criteria-for-assessing-ecs-requests" target="blank">ECP criteria</a>
