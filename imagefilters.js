var img1;
var img2;
var img3;
var img4;
var ref;
var canvas;
var image;
var flag=0;
function upload()
{
image=document.getElementById("img");
canvas=document.getElementById("can");
img1=new SimpleImage(image);
  img2=new SimpleImage(image);
  img3=new SimpleImage(image);
  img4=new SimpleImage(image);
  ref=new SimpleImage(image);
ref.drawTo(canvas);
}
function reset()
{
  img1=new SimpleImage(ref);
  img2=new SimpleImage(ref);
  img3=new SimpleImage(ref);
  ref.drawTo(canvas);
}
function grayscale()
{
  var img=new SimpleImage(img1);
  for(var pix of img1.values())
    {
      var avg=(pix.getRed()+pix.getBlue()+
              pix.getGreen())/3;
      pix.setRed(avg);
      pix.setBlue(avg);
      pix.setGreen(avg);
    }
  img1.drawTo(canvas);
  img1=new SimpleImage(img);
}
function red()
{
  var img=new SimpleImage(img2);
  for(var pix of img2.values())
    {
      var avg=(pix.getRed()+pix.getBlue()+
              pix.getGreen())/3;
      if(avg<128)
        {
     pix.setRed(2*avg);
      pix.setBlue(0);
      pix.setGreen(0);
        }
      else
        {
          pix.setRed(255);
          pix.setBlue(2*avg-255);
      pix.setGreen(2*avg-255);
        }
    }
  img2.drawTo(canvas);
  img2=new SimpleImage(img);
}
function rainbow()
{
  var img=new SimpleImage(img3);
       var h=img3.getHeight(); 
  for(var pix of img3.values())
    {
      var avg=(pix.getRed()+pix.getBlue()+
              pix.getGreen())/3;
      var y=pix.getY();
      
      if(avg<128)
        {
          if(y<h/7)
            {
     pix.setRed(2*avg);
      pix.setBlue(0);
      pix.setGreen(0);
            }
          else if(y<2*h/7)
            {
              pix.setRed(2*avg);
      pix.setGreen(0.8*avg);
      pix.setBlue(0);
            }
          else if(y<3*h/7)
            {
                    pix.setRed(2*avg);
      pix.setGreen(2*avg);
      pix.setBlue(0);
            }
          else if(y<4*h/7)
            {
                   pix.setRed(0);
      pix.setGreen(2*avg);
      pix.setBlue(0); 
            }
          else if(y<5*h/7)
            {
                    pix.setRed(0);
      pix.setGreen(0);
      pix.setBlue(2*avg);
            }
          else if(y<6*h/7)
            {
                    pix.setRed(0.8*avg);
      pix.setGreen(0);
      pix.setBlue(2*avg);
            }
          else
            {
                    pix.setRed(1.6*avg);
      pix.setGreen(0*avg);
      pix.setBlue(1.6*avg);
            }
        }
      else
        {
                    if(y<h/7)
            {
          pix.setRed(255);
          pix.setBlue(2*avg-255);
      pix.setGreen(2*avg-255);
            }
          else if(y<2*h/7)
            {
              pix.setRed(255);
      pix.setGreen(1.2*avg-51);
      pix.setBlue(2*avg-255);
            }
          else if(y<3*h/7)
            {
                    pix.setRed(255);
      pix.setGreen(255);
      pix.setBlue(2*avg-255);
            }
          else if(y<4*h/7)
            {
                  pix.setRed(2*avg-255);
      pix.setGreen(255);
      pix.setBlue(2*avg-255);
            }
          else if(y<5*h/7)
            {
                    pix.setRed(2*avg-255);
      pix.setGreen(2*avg-255);
      pix.setBlue(255);
            }
          else if(y<6*h/7)
            {
                    pix.setRed(1.2*avg-51);
      pix.setGreen(2*avg-255);
      pix.setBlue(255);
            }
          else
            {
                    pix.setRed(0.4*avg+153);
      pix.setGreen(2*avg-255);
      pix.setBlue(0.4*avg+153);
            }
        }
    }
  img3.drawTo(canvas);
  img3=new SimpleImage(img);
}
function blurring()
{
  var img=new SimpleImage(img4);
  var h=img4.getHeight();
     var w=img4.getWidth();
  for(var pix of img4.values())
    {
  var r=Math.random();
  var x1=Math.floor((Math.random() * 10) + 1);
  var y1=Math.floor((Math.random() * 10) + 1);
  var x=pix.getX();
  var y=pix.getY();
  var pixr;
        if(r>=0.5)
        {
          //finding replacement pixel --start--
          if(x-x1>=0&&y-y1>=0)
          pixr=img4.getPixel(x-x1,y-y1);
          else if(x-x1>=0&&y-y1<=0&&y+y1<h)
          pixr=img4.getPixel(x-x1,y+y1);
          else if(x-x1<=0&&y-y1>=0&&x+x1<w)
          pixr=img4.getPixel(x+x1,y-y1);
          else if(x+x1<w&&y+y1<h)
          pixr=img4.getPixel(x+x1,y+y1);
          else
          pixr=img4.getPixel(x1,y1);
          //finding replacement pixel --end--
          pix.setAllFrom(pixr);
        }
    }
img4.drawTo(canvas);
  img4=new SimpleImage(img);
}
