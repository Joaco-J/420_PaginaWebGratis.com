import cv2
import os
import numpy
from PIL import Image


def Main():
    vid = cv2.VideoCapture("C:\\Users\\joaco\\Downloads\\IMG_0264.mp4")
    count = 0
    success = 1
    while success:
        success, image = vid.read()
        cv2.imwrite("test.jpg", image)

        Rimage = Image.open('test.jpg', 'r')
        width, hight = Rimage.size
        pixel_values = list(Rimage.getdata())

        if Rimage.mode == 'RGB':
            channels = 3

        elif Rimage.mode == 'L':
            channels = 1

        else:
            print('Unknown format' + image.mode)

        colors = Rimage.getpixel((20, 20))
        print(colors)

        os.remove("test.jpg")
        count += 1
    vid.release()


if __name__ == "__main__":
    Main()
