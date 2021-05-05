.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon|_
`Learning Center Home <http://learning.cyverse.org/>`_

*************
Analyses FAQ
*************

############################################
*What apps and workflows are in CyVerse?*
############################################

CyVerse has hundreds of apps and workflows in the Discovery Environment (DE).
For the list of applications available in the DE, see the |List of Applications|.
Most apps in the DE have user manuals to give you a jump-start on using the app.
You also can browse the list of tutorials to find help to learn a complicated
workflow or how to use an app in the DE or VICE.

########################################################################################
How can I make my app available for other people to use?
########################################################################################

You can create a new app interface in the Discovery Environment and share it
with other users and you also can install the app on VICE. In most cases, providing a Docker container (or a link to one) with the application of your choice is all you need to start. See the Developer's section of the |CyVerse Learning Center|.

*************************
Containers FAQ
*************************

#####################################################################
Does CyVerse have resources for GPU and containers (e.g. to stabilize R modules using the nvidia cuda)?
#####################################################################
Yes, please email Tyson at tswetnam@cyverse.org for details.

#####################################################################
While container performance is greater than a VM, how much is container performance below that of native mode, in general?
#####################################################################

Please see the Conclusion section bullet #2 in `Evaluation of Docker Containers for Scientific Workloads in the Cloud <https://dl.acm.org/doi/pdf/10.1145/3219104.3229280>`_.

#####################################################################
Are there tools for scanning publicly available containers in Atmosphere VMs for malware?
#####################################################################

`Docker Hub <https://hub.docker.com/>`_ and `Quay <https://quay.io/>`_, two of the most popular public container image registries, provide security scanning for images that are uploaded to their sites. Details about how to enable or use these registries’ security scanning features can be found here:
https://developers.redhat.com/blog/2019/06/26/using-quay-io-to-find-vulnerabilities-in-your-container-images/  and https://docs.docker.com/docker-hub/vulnerability-scanning/.

Other tools to scan your container images without using Docker Hub and Quay include `Anchore <https://anchore.com/>`_, `Clair <https://github.com/quay/clair>`_, and `Trivy <https://github.com/aquasecurity/trivy>`_, with new container-based security scanning software being developed all the time. Each solution seems to take a different approach to security scanning, so you might need to experiment to find the tool that works for your workflow. The easier tools to use are Anchore, which can be used as a container itself, and Trivy, which can be installed by a package manager.

When using Singularity, there is built-in integration with Clair using Singularity’s tools. Information about Singularity tools can be found here: https://github.com/singularityhub/stools

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

.. |List of Applications|  raw:: html

   <a href="https://wiki.cyverse.org/wiki/display/DEapps/List+of+Applications" target="blank">List of Applications</a>

.. |Science APIs|  raw:: html

   <a href="http://www.cyverse.org/science-apis" target="blank">Science APIs</a>

.. |CyVerse GitHub|  raw:: html

   <a href="https://github.com/cyverse" target="blank">CyVerse GitHub</a>

.. |Open Source Policy| raw:: html

   <a href="https://cyverse.org/policies/open-source" target="blank">Open Source Policy</a>
