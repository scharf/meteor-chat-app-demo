

# before we start meteor we have to make sure that npm has been installed
start: .makehelper/npm
	MONGO_URL="mongodb://localhost/meteor-demo" meteor

start-ios: .makehelper/npm
	MONGO_URL="mongodb://localhost/meteor-demo" meteor run ios


clean:
	rm -rf node_modules
	rm -rf meteor_server/.meteor/local
	rm -rf .makehelper/*

# install npm if the .makehelper/npm is out of dates
.makehelper/npm: package.json
	meteor npm install
	meteor npm prune
	touch $@

