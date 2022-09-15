vid = VideoReader("1.MOV");
numFrames= vid.CurrentTime;
n= numFrames;
for i=1:2:n
   frames = read(vid,i);  
   imwrite(frames,['./image/Image' int2str(i), '.jpg']);
  im(i)=image(frames);
end