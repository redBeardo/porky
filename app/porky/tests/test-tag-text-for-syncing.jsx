﻿#include ../bin/porky.jsx;var myTextframe = addFrame(15, 15, 100, 50, "");var myTextObject1 = appendToFrame(myTextframe, "Some placeholder text");var mySyncObject1 = tagThis(myTextObject1, "/syncScript1.jsx", "1");appendToFrame(myTextframe, "\n\nSome more static text...\n\n");var myTextObject2 = appendToFrame(myTextframe, "Some other placeholder text");var mySyncObject2 = tagThis(myTextObject2, "/syncScript2.jsx", "2");