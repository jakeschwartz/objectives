# Objectives

A simple OKR tracking application written on CouchDB. This is a small side project and should be considered a work in progress. Thanks for checking it out. Contributions are welcome.

## Uploading To CouchDB

There is a simple support script that does continuous sync. It assumes
couchdb is running locally and that you use replication to deploy after
testing. To use this tool you'll need to make sure you have a few Ruby gems
installed:

* mime-types - This allows us to properly tag the content type for attachments
* rb-fsevent - I use this to watch directories for file updates on OS X
* yajl - my preferred JSON library for Ruby

Once that is installed, all you need to do is specify which documents to sync like so:

    support/sync library/*.yaml

You can specify just a subset of YAML files if you don't to continuously update them all since I haven't spent time checking for file modifications once a directory fires a watch event.