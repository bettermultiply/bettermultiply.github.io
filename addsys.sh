# !bash

sed "s/<!-- <hr\/> -->/&\n\n\t<bm-title href=\"system-paper\/$1.html\" title=\"$1\"><br><\/bm-title>/" index.html > index.temp

cat index.temp > index.html
