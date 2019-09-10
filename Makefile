port=4200

pid:
	sudo lsof -i :$(port);

deploy:
	ng build --prod;
	rm -rf docs/*;
	cp -r dist/iot-front/* docs/;
	
