.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon|_
`Learning Home <http://learning.cyverse.org/>`_

***************
Atmosphere FAQ
***************

##################################
Refocusing CyVerse Atmosphere
##################################

*CyVerse has refocused Atmosphere to better serve the growing need for container and cloud native development services. Read on for what this change means to you.*

----

*What has changed?*
=====================

  .. admonition:: Expand to read more

CyVerse has changed Atmosphere from a general purpose cloud computing environment to one that supports cloud-native development projects. In a cloud-native environment, you can more fully take advantage of the distributed, scalable, flexible nature of the public cloud, which means spending less time worrying about networks, servers, operating systems, etc. and more time on your research.


----

*Why did Atmosphere change?*
=============================

Because containers have become a powerful and preferred way for researchers to create, execute, and share analyses, largely replacing the capabilities of Atmosphere’s virtual machines, we are now directing resources towards the growing need for cloud-native services. In addition, `the NSF recently extended CyVerse’s long-term partnership <https://cyverse.org/national-science-foundation-10M-award-to-jetstream-2-brings-new-opportunities-for-cyverse>`_ with |Jetstream| through 2025 to provide similar capabilities and interfaces with significantly larger CPU, GPU, and storage infrastructure, presenting an exciting option for our U.S. users.


----

*What do I need to do?*
========================

If you are a US-based researcher using Atmosphere to develop VICE or other DE apps, you may continue to use Atmosphere for this purpose. Otherwise, users were asked to transfer their resources off Atmosphere volumes by the following dates:

.. list-table::
    :header-rows: 1


    * - Dates
      - U.S. Users
      - International Users
    * - July 1, 2020
      - NA
      - You will no longer be able to create an account.
    * - August 1, 2020
      - NA
      - You will no longer be able to log in. All resources should be moved off Atmosphere by this date.
    * - September 1, 2020
      - You will no longer be able to log in. All resources should be moved off Atmosphere by this date.
      - NA


----

*What if I did not move my resources off Atmosphere by September 1, 2020?*
===========================================================================

  .. admonition:: Expand to read more

After January 1, 2021, CyVerse will transfer any unclaimed Atmosphere volumes to the Data Store, when possible. We will archive any remaining unclaimed images with data and delete associated volumes.


----

*How do I get help moving my resources off Atmosphere?*
========================================================

  .. admonition:: Expand to read more

CyVerse staff can help with planning your move, migrating your data and tools from Atmosphere to CyVerse’s other services, and advising you on alternative offerings for moving your data and tools; please contact us using the chat service in Atmosphere or email `support@cyverse.org <mailto:support@cyverse.org>`_.


----

*What can I use instead of Atmosphere?*
========================================

  .. admonition:: Expand to read more

The `CyVerse Discovery Environment <https://cyverse.org/discovery-environment>`_ is a simple web interface for managing data, running analyses, and visualizing results. See `Getting Started with the Discovery Environment <https://learning.cyverse.org/projects/discovery-environment-guide/en/latest/>`_.

CyVerse staff will provide assistance for U.S.-based researchers to migrate their cloud images to |Jetstream|, which uses CyVerse Atmosphere as its primary interface. The CyVerse Atmosphere image must be owned by the user and must meet Jetstream’s requirements for importing images. CyVerse cannot guarantee 100% success when exporting a virtual disk image from CyVerse Atmosphere to Jetstream Atmosphere. Jetstream staff will not provide support for imported images, and instead recommends images be recreated in their cloud. For more information about Jetstream, see `Getting Started with Jetstream <http://wiki.jetstream-cloud.org/Quick+Start+Guide>`_.


----

*I previously used Atmosphere to run instances for analysis and plotting. Where can I do this work now?*
=========================================================================================================

  .. admonition:: Expand to read more

CyVerse’s Visual Interactive Computing Environment (VICE) is the place to run analyses that you previously ran in Atmosphere.

	- If you need Python, try `Jupyter Lab SciPy Notebook Latest <https://sonora.cyverse.org/apps/de/bc93504c-d584-11e9-8413-008cfa5ae621/launch>`_
	- If you need JupyterLab, try `Jupyter Lab SciPy Notebook Latest <https://sonora.cyverse.org/apps/de/bc93504c-d584-11e9-8413-008cfa5ae621/launch>`_
	- If you need Rstudio, try `rstudio-3.5.0 <https://sonora.cyverse.org/apps/de/af14e76b-83bf-4a8a-a475-9d686e1bb868/launch>`_


*How do I use VICE?*

The best place to start is by `reviewing our guide <https://learning.cyverse.org/projects/vice/en/latest/index.html>`_. There are specific sections on using `JupyterLab <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-jupyter.html>`_, `RStudio <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-rstudio.html>`_, and `Shiny <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-rshiny.html>`_. You can even `share VICE apps with collaborators <https://learning.cyverse.org/projects/vice/en/latest/user_guide/sharing.html>`_.


----

*What has happened to my community-created image?*
===================================================

  .. admonition:: Expand to read more

Existing community-created images with an associated DOI archive still visible on the CyVerse Atmosphere image catalog after September 1, 2020, but may only be launched by special permission. Other community-created images may be archived and eventually will be removed from the image catalog.


----

*Can I get a copy of my image?*
=================================

  .. admonition:: Expand to read more

Yes. To obtain a copy of the virtual disk of any image you have created/authored,please contact `support@cyverse.org <mailto:support@cyverse.org>`_ by January 1, 2021. Although CyVerse cannot guarantee 100% success when importing a virtual disk image from Atmosphere, virtual disk images should be compatible with other OpenStack clouds.


----

*What if I still want to use Atmosphere as a computing environment?*
=====================================================================

  .. admonition:: Expand to read more

As stated above, Atmosphere has been refocused to support U.S.-based researchers' cloud-native development projects.


----


*Can I continue to use my Atmosphere images for a class or workshop?*
======================================================================

  .. admonition:: Expand to read more

You can use NSF's Jetstream, which provides the same functionality as Atmosphere for launching images for classes and workshops. Contact `support@cyverse.org <mailto:support@cyverse.org>`_ for assistance with this process if needed. Jetstream also will meet your needs if you want to use something more high-powered, such as Jupyter Hub, for your teaching sessions.


----


*What can I use Atmosphere for after September 1, 2020?*
==========================================================

  .. admonition:: Expand to read more

Atmosphere will remain available as a support service for cloud native development projects, such as U.S. users who are developing containers. Contact `support@cyverse.org <mailto:support@cyverse.org>`_ with a request.


----


*Can I still use Atmosphere for single instances, such as launching a Jupyter Notebook?*
==================================================================================================

  .. admonition:: Expand to read more

CyVerse's `Visual Interactive Computing Environment <https://learning.cyverse.org/projects/vice/en/latest/>`_ (VICE) within the Discovery Environment will meet your needs for doing reproducible analyses using single instances. There is specific information on using `JupyterLab <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-jupyter.html>`_.


----


*Who can I contact if I have more questions?*
==============================================

  .. admonition:: Expand to read more

Contact us using the chat service within Atmosphere or email `support@cyverse.org <mailto:support@cyverse.org>`_.


----


#######################
Using Atmosphere
#######################

*Where should I put save data on  my Atmosphere Instance?*
============================================================

When doing work in Atmosphere, you will likely bring data into instances from
the CyVerse Data Store, your local system, or another data source. However,
within the instance, where should you put your data?

There are a several instance storage options within an instance, each with different considerations:

    - Instance volume (usually mounted as ``/vol_c`` )
    - Instance scratch directory, ``/scratch``
    - FUSE-mount your Data Store directory
    - Home directory ``/home``

Each solution will be briefly described below.

**Instance Volume**

Larger storage, good performance, durable, not accessible outside of Atmosphere

  .. admonition:: Expand to read more

		An instance volume, often referred to as simply "volume", is a durable,
		long-term storage option that can only be used within Atmosphere instances.
		This is a reasonable storage solution for larger data sets that will be used
		within Atmosphere for many weeks or months. We recommend backing up your
		data to your Data Store home directory.

		.. note::

			Note: A volume can be attached to one instance at a time, much like a
			virtual USB drive.

**Instance Scratch Directory** ``/scratch``

Storage size according to instance size, high performance, ephemeral, not
accessible outside of Atmosphere

  .. admonition:: Expand to read more

		Every instance will have a ephemeral disk that is stored under ``/scratch``,
		and its storage size is defined by the size of the instance. The ephemeral
		disk only exists while the instance is active, and any data stored within
		this directory may be deleted when the instances is inactive (i.e. suspended,
		stopped, or shelved). This is a reasonable place for intermediate files or \
		interim "work" before moving it to a long term storage (1. CyVerse Data Store,
		2. an attached volume).

**FUSE-mount your Data Store directory**

Large storage, low performance, extremely durable, accessible with CyVerse's
ecosystem

  .. admonition:: Expand to read more

    You can mount your Data Store home directory within your instance through
    |FUSE|. This method of access is convenient within certain limits. Performance
    may degrade if there are too many concurrent file access (e.g. several dozen
    concurrent files accessed simultaneously) or the files are too large
    (e.g. 100 Gb+).

**Home directory** ``/home``

Small storage, high performance, ephemeral, and not accessible outside of
Atmosphere

  .. admonition:: Expand to read more

    The ``/home`` directory, the directory which you see when you login to an
    instance, will have limited disk space, whatever is configured for the
    image. This directory should also be considered temporary, if the instance
    is deleted or imaged. Unlike the scratch directory, the home directory will
    persist if the instance becomes inactive.

**Viewing attached volumes and scratch**

A command that will help see what is mounted & available is ``df``. The example
below uses the ``-h`` option for storage reporting in more human readable form,
see details Below

.. admonition:: Expand to read more

    .. code-block:: bash

        $ df -h

        Filesystem      Size  Used Avail Use% Mounted on
        /dev/vda1        20G  2.6G   17G  14% /
        none            4.0K     0  4.0K   0% /sys/fs/cgroup
        udev            7.9G   12K  7.9G   1% /dev
        tmpfs           1.6G  412K  1.6G   1% /run
        none            5.0M     0  5.0M   0% /run/lock
        none            7.9G     0  7.9G   0% /run/shm
        none            100M     0  100M   0% /run/user
        /dev/vdb        158G   60M  150G   1% /scratch
        /dev/vdc         64G   52M   61G   1% /vol_c

    This instance has a 65 GB attached volume mounted at ``/vol_c``  and over 150GB
    available under ``/scratch``.

    One approach to deciding might be:

    "Using ``/scratch``" would fit if my analysis likely to "start" with the large
    dataset (30 fastq of 150 GB). Then, various tools are run that produce new data.
    Once those are complete, only a smaller set of outputs will be retained. In this
    case, we use ``/scratch``  for computing intermediate files and only keep outputs.

    "Attaching a volume" would fit if my analysis likely to begin with a common
    input. Then, an analysis (or many) are performed. Once complete, the results are
    the input to "periodic" analysis or refined over time.

    In the end, any of the storage options mentioned in this article can be used for
    performing analysis. It is a matter of evaluating what data needs to be retained
    or the performance requirements. The CyVerse Data Store, or a Volume, are the
    most durable options for keeping data.

----

*How do I manage disk space on my Atmosphere Instance?*
=========================================================

A recent change in Atmosphere "relocated" ephemeral storage mounted within the
instance's filesystem.

Previously, Atmosphere would mount the ephemeral storage under the home
directory, ``/home``. This allowed you to automatically have a larger temporary,
working space when you established a remote connection via SSH or VNC.
This temporary space is relative to the "instance size" you selected on launch.

Due to the nature of ephemeral storage, namely that this storage may be erased
when the instance is not active, Atmosphere now mounts this storage onto
``/scratch``. You are welcome to use /scratch if you need additional storage for
active analysis or work.

See details below:

.. admonition:: Expand to read more

    Example:

     .. code-block:: bash

    		 	$ df -h
    		Filesystem      Size  Used Avail Use% Mounted on
    		udev             16G     0   16G   0% /dev
    		tmpfs           3.2G  8.7M  3.2G   1% /run
    		/dev/vda1        20G  4.9G   15G  26% /
    		tmpfs            16G     0   16G   0% /dev/shm
    		tmpfs           5.0M     0  5.0M   0% /run/lock
    		tmpfs            16G     0   16G   0% /sys/fs/cgroup
    		/dev/vdb        237G   15G  210G   7% /scratch
    		tmpfs           3.2G     0  3.2G   0% /run/user/0

    .. warning::

    		**It is important to note is that data under** ``/scratch`` **will not persist when
    		shelving an instance**. Also, instances which are in a suspended or stopped
    		state may ultimately be shelved if the instance is inactive for too long.
    		This consideration should be weighed when choosing where to put data. If a
    		higher durability guarantee is required (or desired) within the instance,
    		then store data in a volume. You can also backup and restore your data to
    		the CyVerse Data Store.



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


.. |FUSE|  raw:: html

   <a href="https://wiki.cyverse.org/wiki/display/DS/Using+FUSE+to+Mount+the+CyVerse+Data+Store" target="blank">FUSE</a>


.. |Jetstream|   raw:: html

   <a href="https://jetstream-cloud.org" target="blank">Jetstream</a>
