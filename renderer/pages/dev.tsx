import Link from 'next/link'

export default function DevPage() {
    return (
        <div>
            <h1>開発者向けページ</h1>
            <Link href="/home">ホームに戻る</Link><br />
            <Link href="/next">次のページへ</Link>
        </div>
    )
}