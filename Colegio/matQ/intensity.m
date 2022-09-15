l=[];

vid = VideoReader("1.MOV");
numFrames= vid.CurrentTime;
n= numFrames;

for i=1:1:n
disp(i);
I = imread(['./image/Image' int2str(i), '.jpeg']);

x=[0 size(I,2)];
y=[size(I,1)/2 size(I,1)/2];
c = improfile(I,x,y);
l=[l,c(200,1,2)];

end
figure

plot(l)
