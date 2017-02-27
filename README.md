# rnd-date
> Get a random date

[![Codeship Status for bukinoshita/rnd-date](https://app.codeship.com/projects/4f784b50-df3c-0134-18b2-7ad887c2726d/status?branch=master)](https://app.codeship.com/projects/204866)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/rnd-date.svg)](https://www.npmjs.com/package/rnd-date)
[![license](https://img.shields.io/github/license/bukinoshita/rnd-date.svg)](https://raw.githubusercontent.com/bukinoshita/rnd-date/master/LICENSE)

## Install
```bash
$ npm install --save rnd-date
```

## Usage
```js
import rndDate from 'rnd-date'

rndDate(2010, 2016).then(randomDate => console.log(randomDate))
// => 2015-04-18T07:29:04.989Z

rndDate(2010, new Date()).then(randomDate => console.log(randomDate))
// => 2012-06-29T07:51:26.924Z
```

## API
### rnd-date(from, to)

#### from
Type: Number<br/>
Required

#### to
Type: Number<br/>
Default: new Date()<br/>
Optional

## Related
- [rnd-age](https://github.com/bukinoshita/rnd-age) — Generate a random age

## License
[MIT](https://github.com/bukinoshita/rnd-date/blob/master/LICENSE) &copy; Bu Kinoshita
