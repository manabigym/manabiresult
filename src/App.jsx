import lpHtml from './lp.html?raw'

// LP本体は src/lp.html。文言を直すときはこのファイルを編集する。
export default function App() {
  return <div dangerouslySetInnerHTML={{ __html: lpHtml }} />
}
