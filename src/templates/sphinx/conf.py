# -*- coding: utf-8 -*-
import sys, os
from recommonmark.parser import CommonMarkParser

sys.path.append(os.path.abspath('exts'))

def setup(app):
    app.add_stylesheet('css/sitewhere.css')
    
project = u'SiteWhere'
copyright = u'2017, SiteWhere LLC'
version = '@version@'
release = '@version@ Community Edition'

# General options
needs_sphinx = '1.0'
master_doc = 'index'
pygments_style = 'tango'
add_function_parentheses = True

extensions = ['sphinx.ext.autodoc', 'button']
templates_path = ['_templates']
exclude_trees = ['.build']
source_suffix = ['.rst', '.md']
source_encoding = 'utf-8-sig'
source_parsers = {
  '.md': CommonMarkParser
}

# HTML options
html_theme = 'sphinx_rtd_theme'
html_short_title = "sitewhere"
htmlhelp_basename = 'sitewhere-doc'
html_use_index = True
html_use_smartypants = True
html_show_sourcelink = False
html_static_path = ['_static']

# PlantUML options
plantuml = os.getenv('plantuml')