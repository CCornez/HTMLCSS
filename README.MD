### How to add a script to a package.json

How initialize a package.json in a project:

```
npm init
```

### How to add a script to a package.json

inside the "scripts" block you can define name of the script to run & as property the script itself



```json
"scripts": {
    "surge": "surge C:\\Users\\kdehbi\\Documents\\syntra_html\\ karim-html-css-syntra_2023.surge.sh"
  }
```

### important:
- escape characters using /
- when adding new lines, add comma behind new line

## How to run a script & this project

To run an npm script write:

```
npm run [name of script]
```
It will search for scripts found in the package.json in the directory where it is ran.

For our project, we want to run the "surge" command as we have defined before.
```
npm run surge
```

in this case, surge is the alias to run our project, but you could also have used "woohoo" in which case you would do:

```
npm run woohoo
```


## How to see Markdown preview

- ctrl+k then press v
- or press on the the book icon with search icon on top

## How to add styling to classes / ids
```CSS
/** 
class selector schrijf door . te maken voor de naam:
**/
.warning {
  background-color: orange;
}
/**
id selector schrijf je door # te zetten voor de naam
**/
#koel {
  color: lightblue;
}
```