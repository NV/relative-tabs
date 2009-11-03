files = content chrome.manifest locale install.rdf
name = relative_tabs

all:
	zip -r $(name)-`cat install.rdf|grep em:version|sed "s/.*>\(.*\)<.*/\1/"`.xpi $(files)

clean:
	rm -rf $(name)*.xpi
