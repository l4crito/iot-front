port=4200
message="default message"
run:
	 ng serve --watch;

pid:
	sudo lsof -i :$(port);

deploy:
	ng build --prod --base-href https://l4crito.github.io/iot-front/
	rm -rf docs/*
	cp -r dist/iot-front/* docs/
	git add .
	git commit -m $(message)
	git push origin master
