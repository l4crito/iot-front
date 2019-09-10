port=4200
message="default message"
run:
	 ng serve --watch;

pid:
	sudo lsof -i :$(port);

deploy:
	ng build --prod;
	rm -rf docs/*;
	cp -r dist/iot-front/* docs/;
	git add .;
	git commit -m $(message);
	git push -u origin master;
	
