# Sample Lecture - Python

### <a href="https://hydrocode.de"><img src="img/hydrocode_logo.png" width="50" height="50" style="vertical-align:middle">&nbsp;&nbsp;a hydrocode application</a>

This is a template repository for creating lectures with [Jupyter Notebooks](https://jupyter.org) and publish them
using [Notebook-Classroom](https://github.com/hydrocode-de/notebook-classroom). 

The best way to build your own is to [generate a new repository using this as a template](https://github.com/hydrocode-de/sample-lecture-python/generate)

<hr>

## What's contained?

There are a cople of files in the repository. Most of them don't need to be touched, but you can use them to adjust 
this sample lecture to your needs. 

### requirements.txt

As this is a sample lecture, installing the dependencies for your lecture is easy. Just add them to the ``requirements.txt`` and install 
them in your local development folder.

```bash
pip install -r requirements.txt
```

### img folder

The ``img`` can be used to add images to your lecture notes, scripts and slides. Just add them as:

```markdown
![name](./img/file_name)
```

This will work in your ``.md`` and ``.ipynb`` files.

### data folder

The ``data`` folder can be used to add data to the repository, which will be used by your scripts 
or is distributed to your students, in case they clone this repository, too.

### static folder

The static folder can be used to add static content to webpage in ``.md`` and ``.html`` format. The only exception from is rule is the ``index.md``, which is also allowed in 
the root directory.

### .ipynb files

The files ending on ``.ipynb`` are the jupyter notebooks. They can be run by ``jupyter lab`` or ``jupyter notebook`` 
and are editable in the browser. Each notebook consists of sequential *cells* that are placed underneath each other to 
compose a document. They can contain images, text, latex code, formulas or code.
There are a number of *kernels* available, these are interpreters (or compiler) to run code added to a code cell. 
In this sample lecture, we will use Python, but C++, R, Julia or Ocatve are also possible.

These files can be distributed as ``.ipynb`` files containing executable code. Then the reciever will need to install jupyter as well.
Alternatively, you can compile the notebook to HTML, PDF of HTML-slides. With this sample project, all notebooks will 
automatically be compiles to HTML and slides and be published on [GitHub Pages](https://pages.github.com/).

## index.md

This file will be used as the landing page of the published [Notebook-Classroom](https://github.com/hydrocode-de/notebook-classroom) application.
Introduce the module here, or give some advice to your students, how these resources 
should be used.

## Great. I want that. So what to do?

1. Add missing packages to the ``requirements.txt``
2. Remove/replace all ``.ipynb`` with your lectures
3. Configure [Notebook-Classroom](https://github.com/hydrocode-de/notebook-classroom) application by adjusting [configuration.js](configuration.js).
