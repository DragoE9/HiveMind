with open('Puppets.txt', 'r') as file:
    puppets = file.read().split("\n")

user = input("Enter Your Main Nation: ").strip().lower().replace(" ", "_")

with open("Sheet.html","w") as sheet:
    sheet.write("<html>\n<head>\n</head>\n<body>")
    for nation in puppets:
        cnation = nation.strip().lower().replace(" ", "_")
        sheet.write('<p><a href="https://www.nationstates.net/nation={}?generated_by=hive_mind_by_dragoe_used_by_{}" target="_blank">{}</a><br>\n'.format(cnation,user,nation))
    sheet.write("</body>\n</html>")