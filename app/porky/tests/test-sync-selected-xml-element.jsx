﻿#include ../bin/porky.jsx;/*    Select an XML element in InDesign's XML structure and run this script.    It will sync the element's content by using the xml attributes name/value pair which is inside the element's tag.    Global variable syncIdentifier will be set by running this function.*/// Where's the sync script? Here it is...var thisParentFolder = File($.fileName).parent;var thisRootFolder = File("~").fsName;var thisAbsolutePath = thisParentFolder.toString().replace("~", thisRootFolder);alert(thisAbsolutePath);syncScriptFolder = thisAbsolutePath + "/syncScripts";// What to sync? Let's sync this XML elementvar myXMLElement = syncXMLElement(app.selection[0]);