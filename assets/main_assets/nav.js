function installationToggle() {
    var x = document.getElementById("installation_item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function videoToggle() {
    var x = document.getElementById("video_item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function photographyToggle() {
    var x = document.getElementById("photography_item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function codingToggle() {
    var x = document.getElementById("coding_item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function writingToggle() {
    var x = document.getElementById("writing_item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function archiveToggle() {
    var x = document.getElementById("archive_item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

document.write("<div id='left' class='scrolling-wrapper-left'>");
document.write("<header>");
document.write("<a class='header' href='index.html'>");
document.write("JADE LIEN &nbsp 連亞珏<br>");
document.write("</a>");
document.write("</header>");
document.write("<nav>");
document.write("<ul>");

document.write("<li><a href=# onclick='installationToggle()' class='bigItem'>Installation</a></li>");
document.write("<div id='installation_item' style='display: none;'>");
document.write("<li><a href='at-your-altar.html' class='item'>");
document.write("&nbsp &nbsp 2021 / atYourAltar /</a></li>");
document.write("<li><a href='a-meditation-on-noise-and-signals.html' class='item'>");
document.write("&nbsp &nbsp 2023 A Meditation on Noise and Signals</a></li>");
document.write("</div>");



document.write("<li><a href=# onclick='videoToggle()' class='bigItem'>Video</a></li>");
document.write("<div id='video_item' style='display: none;'>");
document.write("<li><a href='scene_re-eco-ver.html' class='item'>");
document.write("&nbsp &nbsp  2022 scene r-eco-ver</a></li>");
document.write("<li><a href='strikethrough-21.html' class='item'>");
document.write("&nbsp &nbsp  2021 Strikethrough '21</a></li>");
document.write("<li><a href='strikethrough.html' class='item'>");
document.write("&nbsp &nbsp  2020 Strikethrough</a></li>");
document.write("<li><a href='jade-and-i.html' class='item'>");
document.write("&nbsp &nbsp  2019 Jade and I</a></li>");
document.write("<li><a href='thought-experiment-the-lazy-screenwriter.html' class='item'>");
document.write("&nbsp &nbsp  2018 思想實驗 之 懈怠的劇作家</a></li>");
document.write("<li><a href='whismuring.html' class='item'>");
document.write("&nbsp &nbsp  2017 微語 Whismuring</a></li>");

document.write("</div>");

document.write("<li><a href=# onclick='photographyToggle()' class='bigItem'>Photography</a></li>");
document.write("<div id='photography_item' style='display: none;'>");
//document.write("<li><a href='iPhone.html' class='item'>");
//document.write("iPhone</a> | <a href='digital.html' class='item'>digital</a> | ");
//document.write("iPhone</a> | ");
//document.write("<a href='analog.html' class='item'>analog</a></li>");
document.write("<li><a href='blue-time.html' class='item'>");
document.write("&nbsp &nbsp 2021 Blue Time</a></li>");
document.write("<li><a href='save-救亡圖存.html' class='item'>");
document.write("&nbsp &nbsp 2021 SAVE: 救亡圖存</a></li>");
//document.write("<li><a href='the-look-of-flowers-that-are-looked-at.html' class='item'>");
//document.write("the look of flowers that are looked at</a></li>");
document.write("<li><a href='dynamics-of-growth-in-a-finite-world.html' class='item'>");
document.write("&nbsp &nbsp 2021 Dynamics of Growth in an Ininite World</a></li>");
//document.write("<li><a href='fossils.html' class='item'>");
//document.write("fossils</a></li>");
//document.write("<li><a href='double-self-portrait.html' class='item'>");
//document.write("double-self portrait</a></li>");
//document.write("<li><a href='wonder-wounds.html' class='item'>");
//document.write("wonder-wounds</a></li>");
//document.write("<br>");
document.write("</div>");

document.write("<li><a href=# onclick='codingToggle()' class='bigItem'>Visual Coding</a></li>");
document.write("<div id='coding_item' style='display: none;'>");
//document.write("<li><a href='image-keyword-rasterizer.html' class='item'>");
//document.write("image-keyword rasterizer</a></li>");
document.write("<li><a href='slitscan-stereographic-projection.html' class='item'>");
document.write("&nbsp &nbsp 2020 slitscan stereographic projection</a></li>");
document.write("<li><a href='audiovisual-sound-stamps.html' class='item'>");
document.write("&nbsp &nbsp 2020 audiovisual sound stamps</a></li>");



document.write("</div>");


document.write("<li><a href=# onclick='writingToggle()' class='bigItem'>Writing</a></li>");
document.write("<div id='writing_item' style='display: none;'>");
document.write("<li><a href='https://drive.google.com/file/d/12_HWTKO86CDthG7r5Pu76IAEboPM5VZn/view?usp=sharing'  target='_blank' class='item'>");
document.write("&nbsp &nbsp 2021 M.I.A.</a></li>");
document.write("</div>");

document.write("<li><a href=# onclick='archiveToggle()' class='bigItem'>Archive</a></li>");
document.write("<div id='archive_item' style='display: none;'>");
document.write("<li><a href='untitled-1.html'  class='item'>");
document.write("&nbsp &nbsp 2023 Untitled #1</a></li>");
document.write("<li><a href='untitled-2.html'  class='item'>");
document.write("&nbsp &nbsp 2023 Untitled #2</a></li>");
document.write("<li><a href='playground-no.36.html'  class='item'>");
document.write("&nbsp &nbsp 2023 Playground No.36</a></li>");
document.write("<li><a href='wonder-wounds.html'  class='item'>");
document.write("&nbsp &nbsp 2021 Wonder Wounds</a></li>");
document.write("</div>");

document.write("<br><br>");


//document.write("<li class='statement'><b>CREATIVE WRITING</b></li>");
//document.write("<li class='statement'>coming soon... MIA</li>");
//document.write("<li><a href='子宮穹蒼之下.html' class='item'>");
//document.write("2021 子宮穹蒼之下</a></li>");
//document.write("<li><a href='裸體性論述.html' class='item'>");
//document.write("2020 裸體性論述</a></li>");
//document.write("<li><a href='the-bitumen-drips.html' class='item'>");
//document.write("2019 The Bitumen Drips</a></li>");
//document.write("<li><a href='散文詩.html' class='item'>");
//document.write("散文詩 archive</a></li>");
//document.write("<br>");

//document.write("<li class='statement'><b>OTHERS</b></li>");
//document.write("<li><a href='thesis-antithesis-synthesis-with-stick-figures.html' class='item'>");
//document.write("thesis, antithesis, synthesis with stick...</a></li>");
//document.write("<li><a href='animation-flipbook.html' class='item'>");
//document.write("animation flipbook</a></li>");
//document.write("<li><a href='vocalization-project-walking-and-falling.html' class='item'>");
//document.write("vocalization project: walking and falling</a></li>");



document.write("<li><a href='about.html' class='bigItem'>");
document.write("About</a></li>");
document.write("<li><a href='experiences.html' class='bigItem'>");
document.write("Experiences</a></li>");
document.write("<li><a href='contact.html' class='bigItem'>");
document.write("Contact</a></li><br><br>");
//document.write("<li><a href='https://www.instagram.com/cnnmn_cnm/' target='_blank' class='item'>");
//document.write("instagram @cnnmn_cnm</a></li><br>");
//document.write("<li><a href='https://flipermag.com/2020/11/22/jade-lien-illustration/' target='_blank' class='item'>");
//document.write("FLiPER 生活藝文誌【不只是攝影...</a></li><br>");

document.write("<a href='https://www.instagram.com/cnnmn_cnm/' target='_blank'>");
document.write("<img src='assets/main_assets/ig.png' style='width:28px; height:28px; opacity: 0.2;'></a><br><br>");

//document.write("<li><div class='copyright'>© 2022 cnnmn_cnm.</div></li>");
   
document.write("<br><br><br>");
document.write("</ul>");




document.write("</nav>");

document.write("</div>");
