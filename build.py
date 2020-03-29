import jinja2
from os import listdir
from os.path import isfile, join, splitext
import json

EXCLUDE_FILES = []
onlyfiles = [f for f in listdir() if splitext(f)[1]==".html"]
# def gen_templates():
#     templateLoader = jinja2.FileSystemLoader(searchpath="./")
#     templateEnv = jinja2.Environment(loader=templateLoader)

#     for f in onlyfiles:
#         if EXCLUDE_FILES.__contains__(f):
#             continue
#         TEMPLATE_FILE = f
#         template = templateEnv.get_template(TEMPLATE_FILE)
#         print(template.render(),file=open(f,"w"))

def gen_sitemap():
    sitemap_file = open("sitemap.xml","w")
    sitemap_file.write('<?xml version="1.0" encoding="UTF-8"?>')
    sitemap_file.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for f in onlyfiles:
        if EXCLUDE_FILES.__contains__(f):
            continue
        sitemap_file.write(
            '''
            <url>
                <loc>%s</loc>
            </url>
            '''
        %("https://covidkashmir.org/"+f.replace("index","").replace(".html","")))
    sitemap_file.write('</urlset>')
    sitemap_file.close()


# gen_templates()

gen_sitemap()
templateLoader = jinja2.FileSystemLoader(searchpath="./")
templateEnv = jinja2.Environment(loader=templateLoader)
data=json.load(open("/assets/data/data.json"))
TEMPLATE_FILE = "index.html"
template = templateEnv.get_template(TEMPLATE_FILE)
print(template.render(data=data),file=open(f,"w"))