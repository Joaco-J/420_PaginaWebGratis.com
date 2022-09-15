I = imread("Image1.jpeg");

x=[0 size(I,2)];
y=[size(I,1)/2 size(I,1)/2];
c = improfile(I,x,y);

figure
plot(x,y,"r")
subplot(2,1,2)
plot(c(:,1,1),"r")
hold on
plot(c(:,1,2),"g")
plot(c(:,1,3),"b")