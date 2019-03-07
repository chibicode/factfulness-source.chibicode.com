import React from 'react'
import AmazonLink from './amazon-link'
import Link from './link'
import InternalLink from './internal-link'

const IntroErrata = () => (
  <>
    <p>
      これは、2019年1月に日経BPから発売された訳書『
      <Link LinkComponent={AmazonLink}>ファクトフルネス</Link>
      』の正誤表です。
    </p>
    <p>
      もし本書に間違いがありましたら、共訳者の上杉 (
      <Link href="mailto:shu@chibicode.com">shu@chibicode.com</Link>
      )までご連絡ください。
    </p>
    <p>
      また、
      <Link LinkComponent={InternalLink} href="/">
        脚注
      </Link>
      や、
      <Link href="https://jp.chibicode.com/factfulness-notes/">
        脚注についてのブログ記事
      </Link>
      もあわせてご覧ください。
    </p>
  </>
)

export default IntroErrata
