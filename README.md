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


## パラメータを使ってみる

パラメータを使用したい場合はrouterにこんな感じで設定する。

```javascript
export const appRoutes: Routes = [
  // ...
  { path: 'artists/:id', component: ArtistComponent },
  // ...
]; 
```

んで、受取側（component）では、`ActivatedRoute`をDIする。

```javascript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    })
  }

  ngOnInit() {
  }

}
```

んじゃこれで。。。（°ω°


そういえば、どうやってパラメータを渡せばいいのか？


適当に`#/artists/10`とかでURLを叩いたら怒られた。


```
Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'artists'
```


うむ。見つからないらしい。


んで、ちょっと色々試した結果。

* `app.routes.ts`の順番を変更したら、Componentロードエラーが発生した

単純に追加したComponentの漏れなんだけど、`redirectTo`がついているパスを下に持っていくとエラーが発生した！


```
ERROR in [default] /Users/user/angular2-routes-study/src/app/app.routes.ts:13:36 
Cannot find name 'ArtistComponent'.
```

ふむ。見つからないと判断されてリダイレクトされてしまったのかな？


とりあえずは、ロード漏れのComponentを追加したらエラーは発生しませんでした。


## ルートパスのネスト

階層持たす場合はこんな感じ。

```javascript
  // ...
  {
    path: 'sub', children: [
      { path: '', component: SubComponent }
    ]
  },
  // ...
```

`children`ってパラメータを使って下層のルーティングパスを用意する。

## Angular2でlazy loading

やっとやりたいことにたどり着けた。。。

(Angular2 + webpack でLazy Loading(AoTもあるよ!)[http://qiita.com/Quramy/items/e3e6d63a2b155aec2067]


これがやりたかったのよぉおおおおお！！！


ページ毎に増えるComponent。しかし、使わないモジュールは別々にしたい。ページ単位でロードするモジュールを変更したい。


最初ビルド時にpackするファイルを別けないといけないのかなと思いきや、ルーティングを使えばいけるとの記述が！


というわけでこれから試します。


さきほどの[#ルートパスのネスト]で、記事のstep1は終わっているので、step2からやる。


(Step 2 lazy module loading)[http://qiita.com/Quramy/items/e3e6d63a2b155aec2067#step-2-lazy-module-loading]


# ハマったこと

## `Uncaught (in promise): Error: Cannot find primary outlet to load 'AppComponent'`

`AppComponent`に、`<router-outlet></router-outlet>`がない。
