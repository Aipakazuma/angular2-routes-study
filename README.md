# Angular2RoutesStudy

# todo

* Angular2のroutingを理解する
* module毎にlazy routingを試す
  * ページ毎で動作するモジュールを切り替えたい


# 学んだこと

## `RouterLink`を使おう

```html
<a href="/#/home">Home</a>
```

ページを遷移するときに↑のようにリンクしても良いが、これをクリックするとページがリロードされてしまう。これはSPAではない。

なので、`RouterLink`のディレクティブを使いましょう。

```html
<a [routerLink]="['home']">Home</a>
```


## Routing Strategies（ルーティング戦略？なんじゃそりゃ）

訳はよくわからんが、`location strategy`という設定がある。これはルーティングパスの設定を、どういうふうに設定するか。という設定らしい。


代表的なやつは２つ。

* `/home`、`/about`のよう普段見慣れたパスでルーティングする`PathLocationStrategy`
* `#/home`、`#/about`のように、`#`を挟んで`/`から始まるパスでルーティングする`HashLocationStrategy`。html5モードはこっち。


これらを設定することで表記を変更することができる。


defaultの設定は、`PathLocationStrategy`らしいが、自分で実行してみたらルーティングのパスは`HashLocationStrategy`っぽいけど。なんでだろ？


設定する場合は

```javascript
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

// ...

@NgModule({
  // ...
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  // ...
})
```


で、おｋ

