.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon|_
`Learning Center Home <http://learning.cyverse.org/>`_

**Atmosphere FAQ**
===================

*Where should I put save data on  my Atmosphere Instance?*
````````````````````````````````````````````````````````````
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
````````````````````````````````````````````````````````````

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

Additional information, help
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

..
    Short description and links to any reading materials



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
