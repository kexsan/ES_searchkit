use npm install
npm start
and prefill elastic from bluk.json file use -  curl -H "Content-Type: application/json" -XPOST "http://localhost:9200/_bulk" --data-binary "@bulk.json"