port=4200
m=default message
run:
	 ng serve --watch;

pid:
	sudo lsof -i :$(port);

deploy:
	sudo ng build --prod --base-href https://l4crito.github.io/iot-front/
	sudo rm -rf docs/*
	sudo cp -r dist/iot-front/* docs/
	git add .
	git commit -m "$(m)"
	git push origin master
