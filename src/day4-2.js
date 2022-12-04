const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

const content =
  "14-98,14-14\n2-20,3-3\n64-67,43-63\n13-91,14-90\n19-47,12-19\n26-74,26-84\n23-41,22-41\n46-67,41-66\n8-42,11-42\n4-23,24-26\n3-38,18-37\n82-84,1-83\n2-98,3-98\n53-98,53-54\n18-80,18-34\n83-89,9-83\n20-90,19-91\n4-32,31-70\n25-59,48-58\n54-55,54-91\n2-28,4-36\n21-66,21-66\n23-78,23-61\n43-98,43-43\n21-62,20-78\n81-91,78-82\n21-21,20-22\n62-68,63-67\n80-83,30-87\n4-88,81-93\n48-53,49-85\n49-93,48-94\n91-99,4-91\n71-71,70-71\n95-99,11-96\n12-99,99-99\n14-40,13-41\n9-91,9-9\n17-92,7-35\n71-96,94-97\n97-97,19-92\n7-64,7-65\n28-79,42-55\n16-99,15-97\n75-77,76-78\n5-92,6-80\n19-37,5-64\n19-25,2-26\n42-43,7-43\n16-49,15-17\n10-49,49-50\n33-91,34-91\n23-97,22-96\n8-97,8-75\n97-97,3-98\n71-72,19-71\n2-4,3-99\n5-33,33-40\n23-34,22-35\n17-98,11-98\n82-82,82-91\n35-63,7-62\n3-89,88-91\n85-95,60-85\n84-86,39-85\n83-83,82-85\n39-60,40-60\n34-83,12-96\n6-97,7-94\n89-94,1-90\n57-81,8-78\n11-12,12-88\n75-97,14-89\n53-87,52-88\n23-45,22-86\n32-78,31-78\n48-81,49-80\n28-28,11-29\n49-84,49-83\n19-24,20-26\n22-32,22-31\n41-51,26-46\n2-93,2-93\n24-33,27-81\n94-94,8-94\n49-51,50-96\n17-98,16-99\n9-85,12-84\n29-84,30-70\n1-99,4-98\n7-87,6-8\n7-58,19-78\n4-94,3-5\n2-99,1-1\n8-57,2-77\n19-57,20-57\n73-73,38-74\n33-99,26-98\n32-64,45-65\n3-89,1-99\n35-78,34-78\n32-58,32-57\n6-98,85-88\n68-85,72-95\n2-92,2-92\n10-41,9-74\n4-43,1-39\n14-72,42-72\n86-99,1-99\n20-48,20-47\n86-98,49-87\n43-52,42-52\n85-90,68-85\n3-27,2-27\n90-90,42-91\n2-94,2-95\n24-81,23-99\n77-87,78-87\n15-90,90-91\n48-90,49-90\n72-97,9-67\n74-96,36-95\n97-98,17-97\n24-48,16-47\n54-89,55-65\n7-15,6-36\n11-22,10-23\n19-87,17-71\n6-87,6-86\n83-87,24-52\n2-90,90-90\n5-68,63-94\n10-87,87-88\n37-88,37-89\n1-94,3-93\n48-89,89-91\n21-94,20-21\n36-99,11-96\n23-23,21-23\n6-69,4-68\n9-79,8-78\n14-98,14-98\n99-99,98-99\n59-99,59-64\n22-22,22-98\n70-70,69-98\n5-63,6-64\n27-87,28-28\n87-87,51-87\n21-97,20-98\n68-81,69-81\n5-46,46-47\n28-62,63-72\n15-61,32-91\n2-88,2-93\n85-85,7-85\n2-95,2-95\n23-78,22-78\n27-66,28-65\n11-69,10-70\n70-76,31-86\n20-27,26-27\n42-73,5-43\n41-62,42-61\n22-50,22-93\n61-79,79-79\n69-97,69-96\n84-92,18-85\n17-90,74-91\n87-87,2-88\n14-90,14-90\n64-75,1-76\n35-35,34-98\n32-39,36-40\n35-50,34-49\n9-71,11-72\n62-79,56-78\n2-98,59-99\n42-96,43-95\n16-85,17-84\n5-97,96-99\n20-44,21-43\n31-97,46-96\n16-69,15-63\n96-97,37-96\n15-21,16-55\n42-43,42-94\n37-77,37-76\n39-43,22-49\n7-9,5-9\n26-26,25-75\n6-84,5-85\n9-9,9-45\n96-99,13-96\n28-58,27-58\n34-55,18-55\n34-70,35-69\n20-80,20-80\n10-89,9-90\n59-83,8-59\n9-92,20-92\n66-81,65-77\n5-96,78-92\n15-68,15-99\n48-77,48-97\n69-89,28-70\n23-74,15-75\n25-96,25-98\n87-90,70-87\n30-32,31-31\n35-99,18-98\n1-58,25-78\n46-95,94-94\n12-98,12-99\n36-62,35-63\n68-73,67-69\n12-44,11-44\n13-93,77-95\n31-32,24-31\n44-95,34-96\n20-75,9-21\n26-68,2-25\n95-98,69-95\n93-98,12-94\n28-42,29-29\n4-82,5-82\n35-75,3-76\n6-15,8-14\n51-96,14-96\n77-80,41-70\n95-96,94-97\n57-68,58-69\n73-95,66-74\n27-45,46-60\n3-16,13-27\n2-82,2-83\n17-92,17-95\n16-34,20-70\n25-97,3-98\n3-91,4-91\n16-99,15-97\n20-99,2-99\n78-89,79-89\n82-89,81-82\n3-40,2-19\n97-98,39-70\n3-82,5-85\n8-15,7-11\n17-44,32-52\n19-45,19-65\n31-97,32-75\n2-97,2-96\n30-31,30-84\n38-57,37-84\n41-74,42-42\n81-81,50-82\n5-94,5-94\n59-87,11-88\n8-83,7-84\n22-96,22-95\n3-75,1-99\n3-56,2-56\n12-87,4-88\n8-63,63-64\n15-62,14-61\n43-88,42-89\n23-24,23-90\n1-92,92-94\n28-73,29-29\n76-76,27-75\n76-76,13-77\n32-78,32-79\n60-98,60-98\n64-70,41-69\n14-59,14-59\n46-98,3-99\n29-62,62-97\n18-95,36-96\n84-85,27-85\n16-18,17-44\n33-72,53-71\n47-91,27-28\n35-88,35-87\n2-6,1-3\n84-86,73-85\n5-99,4-87\n4-5,5-92\n11-66,11-67\n4-42,5-48\n28-93,29-92\n2-50,3-49\n37-87,87-87\n14-90,97-99\n74-95,74-94\n25-74,22-73\n47-99,47-93\n8-86,7-87\n33-99,32-34\n50-51,35-50\n91-97,15-92\n41-93,37-45\n53-53,52-98\n33-60,38-64\n1-92,1-80\n4-56,4-68\n42-64,43-73\n68-75,69-69\n36-78,36-37\n11-63,10-63\n87-92,33-92\n7-73,6-74\n2-2,1-94\n1-29,10-41\n95-95,94-94\n3-12,12-12\n10-61,11-60\n91-98,79-79\n15-15,14-73\n18-58,19-58\n14-14,13-13\n14-71,70-70\n26-81,25-82\n57-90,57-88\n30-90,1-91\n9-99,10-10\n27-83,78-85\n20-84,9-85\n10-86,9-86\n9-70,5-10\n9-88,8-10\n1-97,96-96\n3-97,4-30\n64-84,3-64\n7-93,4-6\n81-88,81-81\n7-55,55-57\n10-98,9-98\n16-96,17-96\n58-87,58-86\n14-55,56-56\n26-27,26-97\n43-55,54-96\n10-50,9-50\n22-99,24-71\n1-96,1-97\n1-3,2-30\n18-91,90-94\n16-30,16-29\n23-48,25-73\n43-68,76-76\n25-82,26-26\n9-40,52-60\n19-72,19-71\n85-89,92-95\n5-73,4-74\n53-93,54-93\n16-81,12-82\n26-92,27-91\n33-99,54-62\n3-66,4-71\n26-87,25-88\n19-50,19-49\n16-35,15-70\n18-73,19-72\n36-68,35-69\n2-75,3-88\n10-81,9-81\n6-91,5-87\n50-59,50-50\n15-15,15-87\n4-63,3-64\n25-77,26-77\n8-50,9-98\n73-74,26-74\n71-83,82-84\n56-94,29-93\n11-30,11-29\n36-64,35-64\n56-67,57-67\n84-99,11-84\n54-92,54-91\n14-68,67-88\n11-11,10-96\n35-37,30-46\n3-51,47-64\n39-42,29-43\n53-70,54-70\n19-63,18-35\n76-89,76-92\n21-92,20-22\n19-57,19-58\n8-56,7-56\n46-94,98-98\n93-98,50-92\n12-93,28-92\n92-98,71-93\n52-84,53-53\n93-93,20-93\n4-92,5-92\n10-51,9-51\n37-88,38-87\n5-48,3-6\n22-49,21-49\n19-75,18-61\n5-60,7-60\n6-28,5-19\n55-85,54-85\n44-59,32-63\n12-27,11-45\n17-18,18-96\n62-67,77-84\n78-87,4-79\n10-69,9-78\n8-78,8-9\n58-62,36-57\n54-54,53-97\n50-50,49-96\n19-98,18-19\n42-93,41-94\n20-21,21-67\n51-80,41-52\n21-79,20-79\n30-84,31-83\n69-74,59-98\n32-33,34-53\n10-43,11-67\n7-47,25-68\n3-75,4-74\n78-96,46-91\n12-39,11-98\n12-82,12-81\n4-71,10-83\n22-22,22-71\n24-66,66-73\n18-77,18-79\n57-57,58-58\n66-98,66-86\n26-26,26-96\n44-48,43-49\n5-21,12-68\n1-99,99-99\n91-91,31-92\n6-97,3-98\n6-94,6-6\n8-89,8-49\n5-94,4-95\n33-42,34-41\n79-80,78-80\n12-95,99-99\n66-66,53-66\n19-98,9-99\n39-39,40-62\n29-71,4-83\n24-59,24-57\n81-98,42-81\n44-45,12-44\n2-97,97-97\n5-80,4-47\n14-81,14-81\n3-56,22-32\n73-83,72-72\n7-26,26-27\n92-96,58-93\n10-90,42-91\n22-32,22-33\n1-74,52-74\n40-91,40-92\n6-95,7-95\n6-6,5-7\n3-92,94-98\n1-85,84-89\n25-73,29-82\n3-37,4-4\n67-89,40-65\n28-79,27-63\n15-57,9-56\n18-51,19-51\n50-99,36-50\n29-79,30-93\n27-27,24-28\n33-89,32-90\n22-93,21-81\n51-79,78-79\n20-68,67-79\n3-95,3-94\n43-44,42-45\n4-79,3-80\n4-95,14-94\n57-60,26-57\n23-86,23-85\n28-82,32-83\n28-53,29-29\n3-95,4-94\n59-69,58-77\n40-91,14-86\n19-30,20-29\n98-98,2-98\n68-99,98-98\n43-88,42-89\n5-14,8-14\n50-52,46-68\n29-56,30-55\n1-94,93-94\n57-88,56-87\n99-99,75-76\n24-43,24-51\n8-98,7-9\n30-85,21-30\n6-92,1-93\n79-80,48-79\n71-73,68-72\n33-98,33-53\n20-99,19-21\n48-84,6-41\n81-81,80-86\n71-91,70-92\n7-7,7-99\n17-17,16-97\n2-12,1-1\n17-30,30-31\n66-66,65-96\n15-66,16-16\n8-80,81-88\n28-69,17-77\n37-37,37-89\n47-80,46-90\n48-98,47-77\n56-66,56-97\n51-51,3-52\n11-93,24-89\n12-92,62-93\n63-91,78-85\n3-59,4-87\n35-61,36-61\n36-78,36-79\n61-94,2-62\n1-90,11-90\n40-89,52-82\n23-23,22-22\n6-51,2-6\n51-93,50-93\n16-94,94-97\n28-58,42-87\n83-94,19-81\n28-84,29-84\n34-95,33-95\n10-93,10-54\n2-80,4-79\n56-57,56-58\n52-75,51-66\n69-78,70-71\n26-87,26-87\n13-14,14-51\n5-99,5-92\n61-62,3-62\n26-80,20-81\n6-75,74-94\n86-98,12-66\n57-61,15-63\n78-86,45-85\n3-89,4-90\n42-42,43-64\n3-97,3-94\n80-96,79-79\n20-84,20-20\n89-89,1-90\n58-85,58-58\n17-54,17-54\n19-70,16-76\n5-8,5-82\n25-99,52-85\n3-95,11-96\n14-86,1-15\n52-69,26-99\n4-18,16-31\n23-73,1-74\n53-53,53-74\n22-55,22-56\n13-58,1-13\n4-55,51-68\n27-99,28-28\n10-58,10-58\n40-84,47-75\n63-93,62-94\n76-78,69-84\n24-76,64-75\n70-90,65-89\n5-88,4-73\n34-79,35-78\n10-27,11-26\n11-13,14-31\n29-29,29-99\n46-75,19-83\n11-84,12-60\n4-84,4-83\n56-79,55-80\n2-54,3-46\n13-24,95-99\n24-95,27-95\n60-76,76-76\n27-70,27-28\n47-48,3-47\n2-92,3-42\n1-31,3-69\n1-97,1-96\n94-96,25-95\n23-81,22-81\n9-71,10-83\n37-88,37-89\n8-8,9-87\n94-95,59-94\n76-95,12-96\n12-63,28-94\n5-98,4-98\n1-94,2-93\n74-75,75-86\n6-24,23-87\n2-91,1-1\n21-61,60-60\n84-93,34-97\n63-81,60-80\n3-97,4-4\n88-94,18-82\n1-96,96-97\n1-64,1-64\n58-90,40-74\n12-99,12-99\n65-98,98-99\n6-89,68-74\n65-89,89-89\n2-94,10-97\n4-71,80-87\n10-10,10-27\n60-95,95-96\n28-80,79-89\n9-80,9-80\n69-72,70-82\n26-26,27-27\n19-97,97-99\n32-75,33-89\n11-59,10-60\n38-42,27-42\n18-49,18-42\n26-72,25-26\n7-35,1-11\n32-33,32-33\n50-81,5-51\n7-20,3-51\n10-87,4-71\n35-82,28-33\n6-16,15-84\n28-84,85-85\n27-90,66-95\n76-91,68-75\n15-87,14-16\n7-81,8-87\n9-89,8-9\n14-14,15-89\n5-90,3-91\n81-84,22-83\n9-44,6-8\n57-57,51-58\n27-97,26-97\n3-81,2-82\n7-66,20-66\n52-85,53-86\n61-99,62-99\n30-31,31-95\n52-91,53-90\n41-43,42-96\n65-65,47-67\n13-13,12-87\n23-26,23-27\n83-85,49-84\n11-16,10-60\n16-84,7-83\n85-85,32-85\n51-59,59-86\n18-59,19-61\n92-94,18-93\n97-97,3-97\n21-21,3-22\n23-25,24-24\n5-73,5-72\n43-44,9-44\n74-87,75-81\n72-78,72-82\n40-88,40-48\n7-91,7-8\n39-52,40-97\n20-52,21-93\n11-88,44-76\n90-98,32-39\n35-86,36-36\n78-95,67-79\n11-22,12-72\n41-94,94-95\n90-91,52-90\n8-83,9-83\n57-96,12-96\n34-42,23-43\n68-99,69-99\n24-92,23-74\n6-81,2-82\n23-23,24-58\n46-74,46-73\n17-32,3-32\n35-82,34-74\n19-98,20-98\n33-81,38-80\n48-62,6-82\n10-90,89-89\n81-82,40-81\n14-99,13-15\n58-92,59-67\n30-72,9-72\n17-89,88-88\n22-66,7-66\n5-32,32-63\n6-80,5-80\n35-91,91-91\n65-70,7-79\n4-77,5-77\n75-76,6-76\n4-88,4-89\n37-91,90-90\n9-79,8-78\n3-3,2-98\n52-66,53-95\n37-49,49-55\n1-99,1-86\n55-67,54-56\n6-89,7-89\n51-71,52-85\n4-89,3-89\n8-9,9-90\n4-57,5-5\n8-70,27-69\n4-93,5-96\n18-18,17-19\n13-14,13-86\n86-98,23-98\n21-47,22-47\n4-31,2-5\n12-55,12-56\n23-42,27-27\n40-81,45-76\n12-93,13-93\n12-68,32-67\n3-96,4-98\n38-77,37-77\n10-10,10-63\n64-85,63-85\n26-99,27-98\n6-75,7-49\n3-65,3-3\n26-66,66-66\n23-61,4-48\n34-36,33-35\n70-93,93-93\n31-98,32-99\n33-34,33-58\n72-84,72-85\n9-64,58-86\n55-85,85-94\n90-91,68-90\n13-15,15-85\n66-67,66-84\n1-87,3-99\n2-82,15-81\n19-46,20-31\n24-75,25-75\n62-80,66-81\n34-69,34-70\n2-76,3-3\n20-72,71-72\n1-50,37-38\n2-18,3-18\n5-79,6-97\n20-87,6-88\n83-83,61-84\n39-40,40-40\n1-96,2-84\n48-94,42-79\n22-22,22-98\n7-10,9-98\n66-77,66-88\n47-52,40-52\n6-19,6-26\n3-64,2-63\n44-82,22-45\n5-96,4-96\n2-98,1-1\n13-86,43-85\n14-91,14-90\n13-50,7-62\n90-90,7-90\n8-33,7-17\n35-62,36-63\n37-48,17-56\n69-97,69-97\n74-75,29-74\n55-72,55-72\n28-73,28-55\n22-77,22-76\n77-83,67-83\n54-72,53-53\n51-95,50-51\n85-99,82-87\n87-93,4-87\n16-82,23-82\n3-56,2-57\n19-65,20-63\n1-92,59-93\n76-89,21-77\n89-99,10-90\n13-93,96-96\n54-84,84-85\n80-80,71-81\n9-99,9-78\n11-94,10-89\n8-61,9-92\n80-97,81-96\n84-85,83-84\n71-85,71-86\n37-98,36-99\n17-96,71-96\n63-63,6-63\n13-70,1-69\n8-9,5-8\n60-84,60-61\n85-92,85-92\n46-79,45-79\n69-74,68-74\n8-85,9-84\n83-88,86-89\n54-54,54-76\n34-36,33-34\n1-73,2-99\n54-60,53-61\n66-95,66-66\n21-82,82-82\n3-3,2-35\n76-92,75-75\n24-85,85-88\n51-51,18-50\n4-22,1-21\n76-93,77-89\n84-94,88-91\n48-93,14-94\n25-57,31-74\n38-38,38-52\n86-86,5-87\n15-51,14-51\n2-51,13-50\n14-21,21-22\n20-89,19-90\n75-82,75-75\n55-68,56-88\n4-99,3-97\n62-66,46-66\n46-93,92-92\n2-80,1-81\n3-64,3-3\n16-47,17-47\n19-48,18-64\n6-85,7-7\n92-97,73-92\n37-52,21-53\n3-43,42-42\n74-99,23-94\n24-48,54-58\n44-91,93-97\n16-94,16-95\n7-93,8-93\n7-91,90-91\n28-86,10-87\n13-44,13-45\n21-98,26-97\n6-97,7-98\n49-75,49-75\n50-98,50-50\n5-6,5-5\n15-40,40-41\n14-96,6-97\n13-67,14-67\n4-92,4-92\n4-79,3-78\n90-96,14-90\n24-24,14-24\n12-90,12-91\n30-69,30-30\n30-46,31-31\n12-81,11-82\n4-86,3-87\n46-76,46-80\n12-81,13-83\n91-96,1-91\n32-40,33-33\n7-97,4-96\n46-46,47-52\n56-56,56-56\n12-12,11-72\n5-5,4-60\n9-91,83-93\n30-94,30-94\n35-41,41-98\n54-54,53-95\n76-77,62-76\n43-62,42-62\n66-79,51-93\n67-91,27-67\n3-43,3-57\n5-67,5-96\n53-88,54-88\n64-74,72-72\n34-63,35-88\n57-77,57-75\n43-53,42-53\n14-26,21-27\n8-75,65-69\n15-42,41-90\n15-87,89-93\n83-83,18-84\n13-43,43-44\n69-71,69-76\n6-8,9-89\n17-75,18-18\n75-83,44-76\n18-96,19-62\n11-54,12-88\n90-90,80-90\n10-79,9-9\n30-97,30-97\n3-87,2-2\n4-33,8-96\n54-97,53-98\n21-21,20-90\n31-96,1-95\n4-99,60-99\n32-42,31-47\n23-65,23-66\n41-64,3-64\n22-65,15-46\n86-93,85-86\n10-77,9-77\n20-25,21-24\n2-86,85-88\n46-46,47-55\n2-14,2-82\n29-38,33-37\n77-81,78-97\n1-89,88-98\n95-99,65-96\n12-12,8-13\n2-59,1-59\n54-54,55-68\n4-97,53-98\n5-96,54-96\n11-93,11-43\n65-87,64-64\n35-73,35-74\n8-9,9-30\n49-69,49-49\n57-64,1-58\n46-98,47-97\n5-84,92-96\n7-13,6-46\n2-50,6-50\n66-94,72-95\n16-16,16-84\n69-85,68-80\n13-30,12-75\n28-29,29-78\n44-79,45-92\n9-63,15-62\n8-87,7-28\n24-83,83-86\n59-64,60-60\n24-87,24-24\n54-58,47-57\n27-38,13-37\n14-15,15-71\n76-85,73-85\n7-17,6-90\n4-95,5-96\n16-77,17-25\n32-63,39-63\n30-74,52-75\n51-99,98-99\n72-87,72-87\n2-87,3-88\n1-29,6-89\n20-61,32-64\n64-91,63-91\n10-11,10-54\n2-70,2-2\n72-83,72-82\n7-63,13-99\n66-93,67-92\n";

const createElfData = (range) => {
  if (!range) return;
  const splitRange = range.split("-");

  return {
    range,
    start: Number(splitRange[0]),
    end: Number(splitRange[1])
  };
};

const main = () => {
  const pairsArray = content.split("\n");

  let overlappingPairs = 0; // counter

  for (let i = 0; i < pairsArray.length; i++) {
    const pair = pairsArray[i].split(",");

    if (!pair) continue;

    const elfOne = createElfData(pair[0]);
    const elfTwo = createElfData(pair[1]);

    if (!elfOne || !elfTwo) continue;

    if (elfOne.end >= elfTwo.start && elfTwo.end >= elfOne.start) {
      overlappingPairs++;
    }
  }

  console.log(overlappingPairs);
};

main();
