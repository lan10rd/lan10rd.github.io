cd ../lan10rd/grams
nx build docs-app-ng
rsync -avhri --delete --progress dist/apps/docs-app-ng/* ../../lan10rd.github.io
cd ../repos/lan10rd/lan10rd.github.io/assets
python3 index.py
cd ../../lan10rd.github.io
cp ../lan10rd/grams/etc/github/publish.sh .
cp ../repos/lan10rd/lan10rd.github.io/assets/index.json assets/index.json
git add .
git commit -m "publish"
git push