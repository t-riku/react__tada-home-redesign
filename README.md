## この制作物について

主に React×Firebase で両親の建築事務所の HP をリメイクで一から制作しました。
Firebase は React と連携しデータベース接続してデプロイまで行っています。

前のサイトをリメイクすることとなった経緯としては僕が大学の課題で作成したデジタルハリウッド大学の web 専攻の Web ページをリデザインしたサイトを両親に見せたところ、大変気に入って「うちのもこんなデザインにしてよ！」と言ってくれたので思い切ってリメイクしたものです。

自身の複数の Web 制作経験、他の方の書籍・記事から「UI・UX」の大事さを知り「UI・UX」を意識し、できるだけお客さん目線に立って制作を行いました。

特に「UI・UX」で意識した観点は「有用性・使いやすさ・わかりやすさ・見た目の印象」です。
「有用性」としてはこのポートフォリオサイトを見に来てくれたユーザーが満足できる内容にするために「トップページ(Top)」「住宅事例(Works)」「ご挨拶(Message)」「レビューリンク(Review)」「コンタクト(Contact)」「理念(Philosophy)」「設計の流れ(Flow)」「事務所概要(Overview)」セクションを配置し、有用性の高い見たいであろう情報がしっかり入っているサイトにしました。またお客さんが一番見る「住宅事例(Works)」の情報を充実させたいと考え、下の More ボタンを押すとその家の詳細が見れるモーダルが開くようになっていて、詳細な説明とその家の外観や内観の写真が見れるようにしました。

「使いやすさ」としてはページの表示速度や問い合わせフォームの使い勝手、ユーザーが欲しい情報に早く辿り着けるかの導線などユーザーに余計な手間をかけさせない工夫を意識しました。ページの表示速度は React を用いることによって Web ページを更新する際、仮想 DOM を用いることで全体ではなく、変更箇所だけを更新するため高速に動作するようにしています。また画像・動画サイズの圧縮でページの高速化をしました。問い合わせフォームは email js を用いていてバリデーションチェックと、送信が成功した時には「送信に成功しました」、失敗した時には「送信に失敗しました」とアラートを出すようにしています。またわざわざ他のメールアプリケーションから送る手間をなくすために直接ページ内からメールを送れるようにしました。導線はこの Web サイトを見て来てくれる方は「どんな住宅を手がけてきたのか」が一番気になるのではないかと思い、トップページの下に住宅事例を載せている Works セクションを配置しました。またリメイク前のサイトで「理念(Philosophy)」「設計の流れ(Flow)」「事務所概要(Overview)」セクションをクリックしてとぶ方が少なかったことと、離脱率が他セクションよりも高かったことから、思い切って案内するナビゲーションを下の方に配置し、より見てもらいたい住宅事例を載せた Works セクションと建築士を紹介している Message セクションを上部に配置しました。その効果もあってか、全体の離脱率が下がり前のサイトよりも集客数が向上しました。またレスポンシブにも対応していてどのデバイスでも快適に見ることができるようになっています。

「わかりやすさ」は前出の「使いやすさ」に似ていますが、どちらかというと「操作性」よりも見た目のわかりやすさ、「パッとみてすぐに理解できるか」というところにフォーカスした指標です。例えばボタンをすべて同じレイアウトにすることでボタンとして認識したり、ボタンなどのクリックできる要素に hover したときに動きをつけることでクリックできる要素ということがわかりやすくなるようにするなど工夫を施しました。また Work セクションでお客さんが一目で理解しやすいようにそれぞれのカードごとに画像を余白を確保しながら最大限大きく配置し、その下にその住宅の名前とテーマをつけることでどんな家なのかを簡単に紹介しています。

「見た目の印象」は全体的に今風のカッコ良いモダンな印象を与えたいということで全体的に背景の写真、動画に黒いオーバーレイをかけてスタイリッシュなリッチに見えるような効果を出しました。しかし動きは少なめで見やすいシンプルなサイトにしたいということだったのでそのデザインで制作をしました。全体的なデザインのアイデアは dhu web と ONEOKROCK web を元に出していて、他にも事務所概要のアコーディオンメニューや設計の流れの数字を左側に統一して見やすいようになど様々な要素を加えました。動きは見やすさ第一でホバーすると動きが出るぐらいで凝ったアニメーションは使わないようにしました。背景は単色の色を使うのではなく、グラデーションだったり、オーバーレイがかかっている動画や画像を用いることによって「かっこいいな」「凝っているな」「新しいな」と思ってもらえるような工夫をしました。トップページは離脱率が減りそうなインパクトのあるものが良いということで、その時に完成間近だった南房総の家をドローンで有名な方に頼んでドローンで撮影してもらいそれをトップページに動画で載せました。その動画も動画サイズを高画質のまま極限まで圧縮し、できるだけストレスなく高速に見れるようにしています。

元のホームページに無かった要素としてコンタクトセクションを追加し、サイト内から直接メールを送れるようにし、訪問者のストレスをなくす工夫をしました。
また多田設計事務所は建築関係の Web サイト（HOUZZ・SUVACO・SUMIKA）を登録していてそこからもお客さんの集客が見込めるのでそのサイトにとぶことができるレビューセクションを追加しました。
音楽をつけたいという要望があったので音楽のトグルボタンを設置し音楽を流しながら見れるようにしました。

改善点としては PageSpeed Insights を用いて高得点を出すように改善を繰り返していますが、トップページに動画を用いているのもあり、初期表示が遅くなってしまっていて、ユーザー補助、おすすめの方法、SEO は高得点を出しているのですが、携帯サイズでのパフォーマンスが悪いので今後改善していきたいと思っています。また時間があるときに Nextjs への移行を考えています。最初の描画速度が遅いのを Nextjs 特有のハイブリッドなレンダリング手法を用いることによってある程度改善できると思ったためです。

公開してからこの Web サイトを見て来てくれて両親のお仕事に繋がったときはやりがいを覚え、「作った甲斐があったな」と嬉しくなりました。前のサイトとの集客率で差が出た一番大きなポイントはなんだろうと考えた時に「UI・UX」が一番大きかったなと思いました。この制作から「UI・UX」の意識だったり、バニラの JS ではなかなかできない、React ならではの仮想 DOM、コンポーネントの考え方、高速稼働、様々なパッケージの利用などに惹かれてモダンな技術に興味を持ち学習、制作することになりました。

前の React 移行時と今回の制作で Firebase のデータベース利用方法、公式ドキュメントの調べ方、ホスティング機能でのデプロイの仕方など Firebase の理解と React のフックの基本的な使い方、jsx 記法、コンポーネント指向、react-router-dom でのルーティング方法、Not Found ページの制作方法、作りたいもの・機能に対してどのパッケージを用いるかの理解と使い方など React と Firebase 両面の理解が進みました。

## 使用した言語・ツールなど

React

Javascript

SASS

Firebase

Illustrator

Photoshop

<<<<<<< HEAD
<br>
<br>
=======

> > > > > > > 70a8ed781203caf6f01a819845f07eb964713918

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
