all: chromelinks.zip

chromelinks.zip:
	zip -9 -r chromelinks.zip app/* manifest.json

clean:
	rm -f chromelinks.zip

.PHONY: all clean
