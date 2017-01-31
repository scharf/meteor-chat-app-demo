

# before we start meteor we have to make sure that npm has been installed
start: .dependencies
	MONGO_URL="mongodb://localhost/meteor-demo" meteor

start-ios: .dependencies
	MONGO_URL="mongodb://localhost/meteor-demo" meteor run ios


clean:
	rm -rf node_modules
	rm -rf meteor_server/.meteor/local
	rm -rf .makehelper/*

.dependencies: \
	~/.meteor/meteor \
	.makehelper/npm

# install npm if the .makehelper/npm is out of dates
.makehelper/npm: package.json
	meteor npm install
	meteor npm prune
	touch $@

~/.meteor/meteor:
	#curl https://install.meteor.com/ | sh

deploy: .dependencies
	DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy dev3.goessential.com --settings "settings/settings-galaxy.json"

.PHONY: \
	start \
	start-ios \
	.dependencies \
	deploy \
