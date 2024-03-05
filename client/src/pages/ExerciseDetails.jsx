import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Plank</Header>
      <p>Planking is a full-body excercise. </p>
      <p>
      Your hands should be palm down to the ground or clasped together. Align your elbows directly under your shoulders. Widen your shoulder blades to engage your back muscles. Engage your quadriceps and squeeze your gluteals. Push back on your heels to engage your leg muscles
      </p>

      <Image src="https://www.realsimple.com/thmb/mTIkaAceZIPOR77gQk89ewY_p9U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-crop-2d801120c6744ca0b27909c142588d6e.jpg" style={{ marginTop: '2em' }} />



      <div><strong>Modifications</strong>
      <section>Forearms
        <p> Dropping down to the forearm is a modification for past shoulder or arm injury. Push away from the ground with forearms instead of palm to get the same engagement away from the ground.</p>
      <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBUVFRUZGRgZGx0bHBsbGhsdHRobISMbHRsbGhscIS0kGyEqIRoaJTclKi4xNDQ0GyM6PzozPi0zNDEBCwsLEA8QHRISHzMhISozMTMzMzMzMzMzMzMzMzMzMzEzMzMzMzMzMzMzMzMzMzMzMzMxMzMzMzMzMzMzMzMzM//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABJEAACAQIEAwQHBQUGBAQHAAABAhEAAwQSITEFQVEGImFxEzKBkaGxwQcjQlLRFGJykvAVFkOCouEkM9LxNFPC8kRzg4STo7L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAICAgICAwEBAAAAAAAAAQIRITEDEhNBBFEigaEyYf/aAAwDAQACEQMRAD8A6OMrQykHyqVW8ay+I4ZfU5rbDcaFivQbjwoxwy/ltlb3eaSBB3HUnTrTJW4zfC38Fr/iEe9SPrXMe0Nz/jUbPlEtr1GdjHkdq6Px79huC2L7XEAJylTz8wDQO52d4Zdu22GNZXAMK5SCBzhlHzqoGVx2Psy4QEtqCoWUn2+qfKqeGx9xBbXL3VHtrZ3exNu4zPbxtuGJMFRp7mqs/YS6QMmIsPy9YjTrz91T7Vepq8uj8IvZ8JZf81tD71Fck7Q8fNvEXrYtyQ51Jgcv1rrXCsIbWFt2mYMUQKSBAMaSJrkPar/xd8RPeG48BTxrOzbzC4rFvlfIgTmAdSPA1JxDGo12zCERIIbeqXCsWgU22ui1lMiVJzA8jXvEsSjXLGfRQTmZdmXkRWiNN5wy6DbtGI0OlXblwaVj14iLSqUuKycldlDgeB50RwnH7N6BbcFtyvMVGlxavP3286j4hhg9sga6jTrVW5e7xI61MXZhlWZMbb0FUN/CP+y3oUqfRmOVYZMXnupcsqLJUAKLZ1BgKTJ66++t7xDCuLF6c5+7beehrm/B37w06a1UTF7id/EA5LtxyIkhmLDTwqnhsXmu2iQoylF0EaA7nqY50R7R3pcMIPdg0Dwb/eKSNiD8RTN2zFIZ7sbVTGDJ9Zh7q9w124XLm0+RoE5W0+FE8gOnhU9Er2MBa/GocflO1WjZw5EDDIPYPpVdEgmKt27OYROWefSkZnCkTM6qkZTE9ax32rqctg6buPka3OF4Wls5lusW56b+dY37WBNvDn99h8Kc7DA8PG38Q+tbLiFofs4b8QFZHhh2/jX61qONqwtiOdVQx2JGpo32FQftdswTAaAOsR9aCXya1P2Zj/jU/hb5UXoOyNb0qIjWrcVGbdZnXoWomSplQ1ILdARFKrtYkmr3o69FugaZ/E9nLNxi7JJbU6mlR/0VeU9l6h9y2CsGov2ZRypp4naI1OU9DS9KWUuveWPw6zG5ga1K2d7Z5Vt29Px/Q1iMSoN+wQQQVfb2Vqe1uMW9bS2q3ZzTPobgA0PMrWPTg15HW4FLAAgQGB15wafQFsZaGckgf0KAILmSyttCSc3q6GZjei2O4g6xmU6KpIIIMxrrUHA7+Q2bgEhAGK/5gY9wpY1VnbrvAcM9vCW7dwkuq94kzrudTv0rl/avh1xsXcZbiIDl3Ph0rq3C8el+z6RPVM7+BgiuXdrXC4x5mSqnQT1p49ooL/YIOlzEjyVZq5Y7OYUgZrl1/LQfGmW76zqrnygUewF61lH3THXm36Ve6kDu8CwoeFtsR++ZolhsPatH7u2qHqN4rzHKGuEr3RyH+9eLhZ3Yk+dI4eXlzV/A3CrArM7eNZfiqMlzMjEAFZE7ijXBcUXxFu3lIDSZ6EDakf00OP8ASPYu5tPu23Pga5Dw9oArtmJ4dNu4ArHuN16GuJ4KqxSu8UGniRNDeFibiD94fOi/GyDl0M5edCeFGLyfxD51Qd8GIfIJYwBtzoKq4j0mf0RybakTHXejLoSAR0Fe27LtvWYVG5VatVZTADnVq1hwtGy0rpbkQZHlWK+1fDquHskTpcI18VP6V0QJWQ+1rDj9hRua3V+IcUS8npyPAn5r9a2HFWJw6x4VjsIdD5r862ONScMrTMAVoGMv1q/ss/8AHJ/C/wAqyuJGtar7LXjH2/3g4/0MfpSvQjt+WvAs1Iwqvi8alpc1xso26yfACslpxbpwWg2B46L7Mtm2zZdyxCgTt1PLpV3D3Lpch1VVA3EmT4Ext5UBbYgAk7CoMJikuKWQkgGNQRroefmKlvAlWA0kHX/ahXZs/duP35/0r+lIDNe0qVBshjuEW2BMGYMGTvVXhlhbTi40u4XKJLCAdSABoZPWj2LEKfI1lG4i+mk+MUWiRLx7tfiLN6wiJby3M05pJEdDIpn99LwHesofEMflFZntNiWa9hCViPSb+Qpov9RFMaapu2rf+QpkTq0a8/wmq79s0lVuYMyTK5cryd9NKEXHVlSenPzobxa+1pUuWj31bSdRqCD8DROTsdO7NcVTFWXuopVS7CCADpA5VkO0uFRsVLXAvdGkToC1Evsrvs+CYNutxl9gCxVLtIn34PPIfgWp9VKDD8NtEqPSEkkDRY30rS4bspbmMzn3VzvsfxK4HcNbuXfvE7ywcmu0HrXYLGMLEBbbqdJzoYjXmOdF3BGH7TcLWzeUKDDIDrG8kHbyFDliKOdtnc3beZVHc0jMeZmSQKAA050Gc7SKc51/LzipeBcUa3ibRZlKoxJlgNDoYPMxS4/bDMQTqQPnS4dwdWxNoZC4JAIXKCf5tKr6DseC4xhLiMwv2yo0MuojTnrXAFCi4+Q93OcvlJj4V3VOCgW2RbSrqMudhB5a5F8dudcHsLluMDGjEGNRoSNDzFLFNFe0SyEMkjLQDho+9TzHzrScdSLVvXy8qznCh9+n8Q+dWT6LRO6IHIVImm9C8XwjPqcRfAP4VcKB4DKs/GhtzszYLSTcaNe9duHXyLVmBzEY5VIl1HtFIcTtDU3UH+YUH/se0NfRKT46/Or+CwVpdraD/KKOAupxiwdrgPkCfkKzv2nYlLnDcyGR6VBMHcZgdx7K1tpQNgKyHbkZuFXD0uz/APsb9aU7NyHDbH2fOtmr/wDB6nSKxmFGjeX1Fa6zbU4UTPtrUmVxW9HPs+fLj7Gsd+PeCPrQTHAZjV/se8Y2welxTp5ilehH0Fcskk99h4CB9KC9pMKMlvVj3ubE8j1ovexJBIFtm8oHzNCe0F1yiShAzcyN4OmlZw6b2bwCKzOB3gAPYd/lWkrLcEvXQbhVF2XcnTU6wN9z02rTZT19w/WaVVOnr7GdooL2aPdf/Kfgf0o3FBOzyZWur0yj3FxQPsdpUqVI2Vu8QMHMp58j8amw2GS9bXI4UTyAPxq2rWQDJJBnfMdDyrxMbZSAiEDkFWBQUA+Kdk7d17Tticvo80CF1mOppn90bR/+IB9i/rUnaTtCqqto2M3pg6AkjSBuRGu9Y39iI2EUzaq/2Ss+r+0gEDY5fiJoPxTsrbZADjrSqDqW/wDdQ18M2UedVOKBkt5oBKmfcKJ2d6dD7EcNs2MOy2LvpVZixfSMxABAA2Gg0NCuOWpujyb51X+yK8XtYomJ9KNhH4F5UQ42D6VenfHyp3tEZDsHiLaNdVnVSbiQCQCYOp1rsdi4DsQfIzXH+w2HR2v5kViLixIB0nxrq9nAW8wb0agjYgAfKnkMWN+0XiFtLlpZzOFbuiJGoify+2sYP2i53g6oI0CqCfewM+yKn7T4kXcffYAABymn7ncnxkqTPlV3C2WW2GI0IGnvkVnlb1G+GM7rJ461dLS1ws3iq+fICjPZzjIGLs+myoQ0TspnnP4T5++rnFbSqQRr3Z+X0A99ZLH28zUS/sssZ9Ok/aPi3vNZsYctcEF3S0C5kZchYLy1auVYXRiI1BIj21t8F9omNCLbVbRZEALspLsB+IkuBPXTxrMDDFma4YliWYgzBJksQNhJOuwrfxeO3lh5PLJJLOhDjtxTh7ZghhvWc4Mp9Pb0MZhrGn9RRtLTektrcZyG1BU59PwlQCdzoKuX+GkB2GcLlKjPAMkRy8CffW3xMflmnRsbxm5my2xhyogBmxCif8oBqleu446/8MBygu2nwmuUYnCsp01Fe8P4pew7ZrTldZK7o38SbHz36EVF8WlTybdfbEX9i6DT8vP2mlh2uOxBv5fJVqr2f4/h8Tb9J6KLix6RN8p6jqp5H2birLYxM+ZLZ10jL0rG8cLFsNhCd8RcP8o+S0E7U4UDhV/VmKvuST/iAbbbGr1njLbLaY+4fOq/G7jvwzFygCyT62oOZTER18aRxxrCnfyrbYW6pwYGWTrWHwzRm8jWq4SxawVjatCZ/HCOVWeybxjLH/zF+YqHiY13qPgbxiLR6Op+Io+g+lXOtCO0Z+7X+MfI1NjbS5tWbUD8ZH1oRxa3ayDLJOYfiJ+tZw6l4DikV3DECVHMcp/Wjy4xCQAZ8tflWVwGEtm4uZAQRzE1rLZAyrtoQNOQilTh/pNCQDp1BHzoNwN5uXCREyY6d4/rRq76p8jWd7OXJuv4qx/1L+tB3tpqVKlSNnnzxsKrQ8/7VkP73Y9TDWMO/wDC7L+tT2+3l38eAb/JcU/MCnotl2vS56XCbes8eeWqitc5g+ypcb2osXjbN7C4tChLKVVGEkQZg60l43gWOt28n8dlvmBT1Rt61whe8KEcYvq+Hcjx+EzRPEth7kejx1oRsGDL86IcC4Vb9InpLli5b9Y5XEFhsSp+PlUbsy6a6xuN55GOxXCxhcCgIyu49I5OhzNqAf4VgeyqnGcQrvbcTBDgeIEa/OivaDGqUZEIJcqmnQ9POqXaO2E9Eo/CIjwirZMJ2Nwjs924t10i4BCgEGSdSDXY8NYYETdZtNiF19wrjXY7FXEe6qW86m4CWzBcpnQa9a7HYvPKg24BGpDKY9lPIo4gom9dJ3zsT7SZPnrWnwlxXzAMIXRQdZMaNpuPdQTtBgGt4u+AIGdvYCZEjoQQfbVngmEFs57jbbCawyzkdeGFui4jhn7xK8tPIHby29tZPHvlJra4/iIcMc2kRofhWKxOGa4S2y9TSwy32rPDXTy1ctobYXvXYzsS0AEyfRqIggIBMnUkxEQSWIthVS4khWkR+W4OnSR8jyp+GxlvDW0utaV2dWWeZJ0yvOmWJ2186o2MXOHZN4hh5jX9ffWvj8lxyl+mPl8Uyxs++xTs/wAVW3eRmEkCFCcysZPgSY8TR3jeKR7WZLiuoKjR1ZlIPqPlJAIkc9ormd5NZ3GbKfDmp9x+FHeD22UBfwOdvFef9da9DHdu3mZ4yYiaYXuKG5ATPlVG/wALUyZjyq5jbuYpaUmWksfyophmnlr3R7TyFLEZUGVQFA5CtrqscbYq8GxpwWIt31l01S4v5kb1h57EeKiuw58Nlt3UvWkQ6g51Cv19Yj9Qa4u6ZpU/iEe3kffFUMFc7uoGhymRsY/71y+TxTK/p1YeSyft3nEYnDOqRetetoUdCTvpvtVbjFmcBjVBkZWYfyq30rjX7RGq6EbgaecED4GdxRLh3FHytbR2GcZIDBVedCrIe7m9o8DrWOXjsbY+SVmMOZPvrWdnrzC04UAzQTG8KNshl1UgmNZjUGJ10IIKnURz3rR9krStbYzqFmmVZ3ij946VU4c0XUP7wq5xZTmM9aGW2h186RvoLjN+2MhYDVBvp1oOMVbcZEyk76GizWku2rDlVM2k38qbgMJb9IFKpBnaPpWW1aD1zzpA03JiK0PDMe1zKDlBAIO5zeI2jaqnH7KWLXpEtrmDAQSdQd6I8OxaXLdpxAzAwPfMUURecSCDzB2+lZXsu33g8Vb/ANJ+laPG4xbayZnkOp6UB4Ww9LbI5lpjyOlE6F7amlSpUlOO28E+gAIHXmR4142FuA6A+zb3GiaYhY/5Z0/e0+NR3Lg3iP8AMKYUIcH1SfZUd3FkTNs6VfDpzMVG9+2JkzQA9LobdFHsBqc4e2RJtggeEfKpEv2p/DVxLyMsaRQAe/hbcEgMsCdGIopgeM/teGCshzWWFssWkuQk5vjXty0sGI2NB+wRzftdvQ98N8MtP6KqfZLHrbdrbx948hp9VlOx8xXcbG48a+crPD2e5c74Uox+ZrfYPtlibaKo9GcvUN+u1PKFE/2krGJDLociFoG4lxmPSIAnp5Vhzis+npgFnqPntWnvcafFXHuXMuZYQZAYCjUbzzY0CxOFtvjlR7anPlBnQEldZ68jWdw3ut8PJZrGqT8SwqaM73GGypt7WP0Bqa0t24puMoS3+ETrFXON9m7WHKnKhzNlC5oY/wANCOK3HXuFWUDYFgaz4vTfmf8AX+KfFb0qByGgqomKyr7Kq464ToDtVETMSTXRjhxHNlnzdDnDsQJyue6xGundI0B15f7UStn0TjrMRsJ8uXqis7ZOlELWJzKqsdVIKny5H312Y5cOPPBrFQK07lyPaB/y0HgB328zVfGPJ3/rrUGAx4dZO6jKeW+6jpmMyRyPlTcS8EQDmO3UfveB2gctCfwrWvtNOaY2XlFdJH9dND8ZHmD0oY5h7kfibN7SJ+tXbzjUsdhpHXZVHgNz4A8zqHxVwq5nmJHuiss628cXbt7WRzg+8aj40/DPOdZ0IzDXZlO/8rN8KGrdn4D3aVcwU98xML8WI+gO9Rldxrjjqtbcvi5hrR1LFCwjWLlohSTGveRoPWE6VT4RdKlwggwZUfMU7AYjLhkgCRcFvYwfSJcjvHcidtAM22uoy3fNu7HNWI88uhB8/rWS3nEHJYzQr8Y8xR3inDrpuBbaM6ModWH5TyYnQEGQdeVVW7P3zLDISu4zGR7IoLp1vBcYtrh8OrIzEWk2GlOscctq4cWGkfw/rXPU489u3aRrLkqoWZ0ME66ctd6lXtC5iLEA885rPTR0bHdp7dxGVrDEHqy78jVLD9oAgQC1/wAucuZtp8qG4ZrTCdZPKamdLe8D30gt47jbXWQlFjUAZjA9wpvZvjNu5iFtnS5nYQJjRWO58Aapenth0ECJ38ayrYjJj2I0i6hEe7605E13ilWS/am6t7zSqFstZwS6EtNMe4Bso32ifjRFrFv8wHlTf2W3yY+wfrRs9AD3XJ9VT5iKqsr9V8oNab0aLzJ8x+lMYWzyX409jTOi27abeyrFrCkaBqJXSF6e6q4xA5iB4UbGjGsEaBjtQ/7NG+/xY8B8yKJPeSJoX9mttmxuLCR6s6/xGKc6qaFcOb73ESJ75+Zoj6RNiPhUHBUIv4sHKCHI7x55jtRJm8E9jCnROlPh/EPRtcVVmW09wql2luF2W4RBjLp4ag/H4CrFlz6W7Cg6jx5daNcJw4uvluIpVdYInU0e8w5OYXPiMCL15rmf13iAXIdo6AMDUVjDvduMplWUT3p+Xn5Cu0cS4dbt2j6NFSR+FQvyFcmud2/c1jT61M8kyy1Jpplhljju3ageA4ojMtsuDsVIPwJB5dKGXcFdt+vbdOpZGHxIrdcL4iq2wDdVYJ0PnV1uMoP8dK09qx1HNFvU4Yit0+Lw5Mk2SfFFn3xUOMGDurD+jEbFZUj2qBPtp+9L1ZThd12v2wmrMwXznz6bzWka3cViHQhj1ME+BJ1A6wJPhJFVezeCtrjEyOWjPE7bQDPPQnlXXrCEroTUZfkXC61trh+NjnjvenKBw247AZTPipCqOsnf2T41T7W4AWmtEaypVj1Yaz/q+FdL4rbymedYTtqMyBujA/NfqKyn5GWec3xGuX42OGFs5rJ2W6D2mjfDbZukIiSoPeciY0kmPVBgaTMRQTD9TqOmse0CiqcSyqQgCsZBYAaKRBC9NJ99dO3ILvjARCybdt0Kid2UQWzRzg6QdKEtdLXWc7MW08SZPOohie7kA0kU+0NqA0vBuNFGtpdlk2Mb5CdCD1U6+RIrT8UwqoPTC4SgGVu794DPdCgaNMxJiJ10rnlhvSXgVhVkAeCjrPgK0vEOOLetNbtSRnUM3LQ5hpuZy+VGxcb2p8W4lmORVCpOiADc82aJZtNT40LwuIHpIQHIWECemk6+INC8Xeb0rDeCQNOXl1q3gSBcVjJG8L4ch41ne22OP8b/AOOnYXBLlFPfhwmZ0oJhe09pP8K9U/8Ae21ys3fhS1UcCx4dmYTGUanxNYbjD5MbcjYOh+IrRv2qtnaxc9pFZm9YfEYvOls5XZJB6AiZPlTx39punQf29fzUq2ScLw0D7pP5RSqeFaY/+z728gU1sBcO7EjpH1rI3MdxNhJuX4/dskD4LVJ0xzbti2/yXB8lo1P2vn9NmvCXE6keZ28a9fhyL610A9S1YVuGYlt7WKbzFz61KnZxj61u9/8AhdvmaV1O6eMt6jWXRYQy2IQebA/WqeI4ngRviEJ27sn5UBHZo/8Al3R/9s3/AFivH4NbQEvcuKBv9wB7NXpbx/Z/Hn+v9EbnHMEPVZmPgjfpWY4dfupeu3LTOgeYIlSRMxRhUww2zt/9KPd3xU9m7aBgW2Pmi/8AWar219U/jl7sA7tpAZuNBY8zqT9afYwdq4SqlpH8WvlprWjXEHSLaAjm1s6DlGtGMPi7oENcgkTAQAx1hpMfrR73XQ+PCXm7/phr3CLtskWyQD0dR82rT/Z+rEXCxJOeNTOgA2PmTVfiqXLrFELMzRty9wEedHeGYb9mtqMpLDckkEk777isfJllrV02wxw3vHf9r/anHZLR15VzHAYUXfSXG17+UDc6CfrWl7V45rluQDHs+OtCezFwJb15uT8h9KrxfdR5uJItYbs9bb8Dfymidnsla/I38ho1huIm2BmUrIkZgRIpXu00bR7619renP667Cz2StD/AAz/AC1XudnLQ/w/9NT4ztO8aORQl+0Fw/iNObK6Pfh6Wj6RFhl1294901tuE4nMgbqKwTcTz6EzRjgGKuIMpU5RsSQJHLTcVh551XT+Nd7gnxwHWuf8at3Lw9HbUuw1IBAgA76nqRXTMVct3UIgq0bGNfIgn41h8GVTEvOxUj4g/So8X/TbzX+LG3+C4pAWay4UbkDMB55Zp/AOFXsXdW3bUnUZmg5UXmWO3s511TB4hJ3oi+NRFlYA3/qK67k8/TAdo+weIwwNyyTetgawIuL1JQesu2o11251lbN8sQgEsdIGrE9ABr7K6Ni+00EwfnQ3+88EsCA3UKJPtiactK6ZrHcNu2WW3cTK0B2We8AdVDeMcvrIo99nSBuIINcvo3LjlEaT7YoRxniL3ri3BqQuXXnzG2+/OjfZXFLhw76h39Ziuw3gRypWXe619566n9hXHcGXxuIKLp6a4Dt3QCQKs9n7UYzDIIPfkgR6sHNJ8qqcRxxa9edQCHYkElpExsBpWg7FLhrZNxnc3iIkqQFB3CnWSetT63urvkx9fXGc3tvHwdr8lJeH2z/h0rd5dDOlXrd1PzUmIdc4bZ5rT8Dg7asCqH30Rd1517h3T+hRs9CSOIGh99e1X9MtKkbmIu2xtYu+3FAf/wA2jSe8un3dxdeWILf+ipzhjrAPONSY20+J91NSyOcaT05jTY6b8/fppp6RPyZBt8MTIuXFHTP58zrTGwpP4nM9Xff30UGH2AAOsaayJ2+B6/HVjqPzamQAJjlIJnca+8UaiblaGfsg1OWfHU/1pSa0Byj+vjVxEOhGmsc9+k+0D/vUfojBJA6Tt3t4M7aa1R7VWtddK2XY3hpRGugozOAAoiVAnQnkTpp4Vk31MA97pzPPx6HyiukcFwiizahRoqy66SY1P73t1rHy3jTbwyb2p47jFizdw9tnRC7wytACrqZYH1DmjXxrGdsOKgY8MtwXFRCoymRLZu7zmCRzqb7T+LsXTDKUYKMzMNTrICsCO71iTyrn7uyjVcqjTmAfLr7KjDDjbXPKdV0zheLUNoRMCQNYPQ9IqzxPi8grI0Fc2w3FGAAUNA5KCKfcxV19EQjzYSd+k1PxZWq+bGRa43jd8rb7jl4VsuyFqxaw1s3bZa84LqpVnZlzHvIgmddNByrnuGwVwuGeI5QDpznX510zsdi77o9vMpVAO/caCqxCIoC94DKTy51eWFxx4ZYeSZZcr2Ia5dV89sWUMgBxmdvEqvq+01gPRZcyq8hZk8j79q3PEOH2yS17GvrstsBBHgO8T8KxGNtW0e6ZfID3Qw7zk6iduWvtrLDiujPVi/heG2bihu+0mIBA+hmvb/A7QGmec35uWvhVXhXF7Vq05LqrCYDOM5Y6CAfVUe8xVC5x8b+kUk7wZ+NV/PfFTJ45OZGn4dh0tbKPn75q5iMWu8DzrFf28xHrVXxPFyfxVHx5W8r+TCThosfxQiYMDzoRgr4e47MY295n9PjQS7xAHSZ8BrT8M1wjuqdev6b1t4/Hpz+Xy7mmqOMtL1antxC0ywFj3Gsy1u547+wVNZsERLHpsdPft/Wlb6jl2diVUmmW7dvnU4sAkyT+8enWeo13qaxgyCNNNJ36fKRoKokKMBso90/KpGUnSD7v6/qatLhgDrAiNdd+Y6DXrVixaUe/U9fLnNADrPD51o7gMAAdBt4U+xbk5QYjxHwHwnxorhE26k66jWJGnu2/SptOL+Btkaa6+6iiJ7vKqOHK9dp/qYH0q/acdf68pqKo64ANYry3y1WOev8AtT3fyOnIj+utNZQdCseUT76RpJA/L8P0pVXgciPain45daVAZfx0BbckjQ/h1JAUQeR57iJpqhivdBOshdWA0AHeHLWPGBrrUv7OBJIAEGDOhkCVOYAgmQNARAOmsh98IJUdDGRHhm6yYmBAMcwIitWaic0Sx1kg6qYJOnraDfw9s057Z0aNwSM3ONJJBn2nQ/CpMTm1UjN3iJJPdMQSSddgRM/qYWBZ4UDL3i2kmSDrA1J31EA71IQXJ9ca7a+roQeXQyfLWKivgrEayNzB9Yx3eYEeB51YNtfWCjUtlGfnAKyJJOuvs2B3hOILAaSAxGUrzOXQQdNvPaaoI8SrDxUyQBoAV3O2u/Xw8adZ4xiFtPaS5lV1KwACyyNQpOskEbzXuJiNsxUSp1IJ1HeAOo03ny51WCgBwwIiRAgRPIz4+0EGKVxl7VjlZ0BrwRZJJYn8xbTYkRHPukawPhUlvhgkiFY76d45eZj39eo0gk8IBk5XUQdQRqSAS2vLcDy0GoNdCRKAAzLCI3DSDlGgMchrB8TTK0OOEkhQAD0gDoQZ1B3n3eyU2QDA0Ezl0jademxE69KIXVgGQRufhqCoG5Pe9keNNxdzQhk1AJiWPIRmkazlGvs0gQDYWmGcx5yJME+A66Tp59KIYZGVlgsNRs5XMAYgnSNYHyqJrYiQACYGkSAdTrEyfzaz4g1NicU0qobQjefVU/hbXkqzBIqbNnLq7aHiPau33vQ4QBhuz+jze1y0nQbyaxvE8RicTcHpMidAGG5Ey0aTA90eFSo5JUjvCToTpMeDDKDPQDYDWnIjIMxAIhlB0Yj1WDAFZAGje0nwqcfHJy0y8uVmlJOGMQv3g1BOnx/ry61G3C7ZmczaA65RAIEHQ6nUVdLM0Ed6ZOmn5Rpz8Jqw2bWFYkr3jl0AgGUUbjnJnTwNaMg3+wrY1KyJ2zn2eU9SBt507D8JtEZgqkczHiRHPeJ06iiNi2ymQYbKYAM6yBGmqkgH+YDSn2L4AUEFCRMyNuY1E97Qka7mgKRwaxKoQRuPAAzsDOsD4damOEMABZJOkSSASwjQRJgb9RruBOhYOTJ7pLgrMSO7nkiCJ6DWR1NRF4YgN+43OAc2mb3y2+ukRQKa2EjSGzCBABg6Tnk8vIe0jeJbSsARmkEEaAg6zLnSDruZiBtVxNFUOSDssr3RqpBVokHug6aASRrpXiGQSc3qbK22WSU2MSCTvG5noyJMIuimQRInQNuNTO4k9dlMxTTaBIZXJmGjly2XfmNdJkDxqfDfhkB1JVQWYRzzAczz05Ar5GW1g1cgI4GoBIzTMSoAGvUHXSD1pBDZtg6rqNiQQdCDvHQjYnmPbLZw5IDDRQYJn1T4idG0PQ86lsWie7mkiCAT3e6ZZZOhOkTMaDSpEVBlkEa5oMwdTEFht4/HYUBHkIBMCBGvdOoMyIPIMB7Y0onhBz0XUR4TtJ3/AO0VBbDOdAAsGRIjWOuukDkNY60QwiKw7xMAnQkxEg6+BJHvPSlTTWRpv00B8idY09tXbLayBPtHh4dYqvbtkTG/WSeoOo8/nU2YzB0B5LMmdBPQgxU1SfOAum2/Kdd9KcjCB3ff005R5e6lYTNptBg9BsOp608aA66Rv0PgTtzpAzOvX4MPrSp6KQBDQOQzDSlQGYw+R9GJ1YZgBJKjpoQGknU077uBbFwzsobKFy7nOYkAZt99NhUwxKk22XWILQYJOrEGIPOmFPSKzrMOxEd3ugGYGhOjRyFaIQPh2Vgrgp6OAcrZhlInQNvm8PhFR3sNlAdEOVWK5WJDEmR3spELsPbU9jCsyl2Vs6kZQxM5T1BGgrzGW1IGoKKIjmW0MsPxbAdKApvNx/RaFS4j8JDELIkBtBEc9J60y+AsqpyzpCCO9OjNIkabVOrswRNEJkyo1CrsxbeeVMvsxCkrLLAB55SIAIA1MeJoCM4PvnUkkgwR6wH70gTqRGh06mocQyRmiXMqVCnLM82B1iNtR1qbFhyhYZigVRJETrrrueVNw1k21IUNLLGUgaD1mzeBj3UB5dcwsEHUASwiRAMAiP1za0ywgkOSoImGB9YwdxO0ga77b1C4BuOsmTBBRRDH8sRtqalRR+MR+CDoBO+h5nwoB7KShWFgjOJaACIkmNSdCI8aos5hcp5mRvrqAYM7SSDyNT3rqmVHeiBodFAEaxvStw9xJK93Vs2ggDWPDnrvQFWQFRiJZCRAzZiBAGhlSYMeQjpTGOWGYyzAkhhl8BGU9476aVes4gKuRTmUsBqWWAZGc/0NqquAHyiGI2PehgCdBzI8+lMHHDloDZQcoIUFRAymJcnfugzyqEsrQx5gZSs6toBoZ00PLQ0+7bQuqljk9HmGmqt0O+k6V5dRgVDBAAdBoZkRII2GgoDxWGVUy+qTJXQmMxgtykwN6TK4YHKRAEk65Z9QjyXbpSv3SrNAKodSQZmJBYcvCacbmYIuQt3dCTAgbwOusTQD7l2AQEiAD3WYlDJBKnQiRuCYO9e2nkTchTqJgchI8yeevM15h9RmuwqaCBv3dAQOZnc0seksSCczSQpYGFmIJ3zUB6L4YqVBdwDA1UK08ogEaTGnOvGgKHYGcxHe5kESCI1MjrVc5RMKWUiNIGk7mBpXrGXC5Aq5hpuD0OupPLxoC3fURmL817oGp55mI0jXL7tKithglw8mBBKyRrAWd4A78nfXxr2+rsWkmA+0HTlGmgEVYu4fKAV1yn1QdDoJk7gigKwwzKFytlaMxC7kQQW8BlI0+GlTeiMZ7cqD3SJOZpBzEbjXefGmIVtgzLPMAaBQDybnzqRLzNnQIGO4ysRl6+emlAOS0SFGmWcoZh3QCD6xg68tOdWlSdYOUmRJhiIk76RpMVHetoEAJdR6OddmeZ0jz3p2FtIUMhljvK0kw3QjakF3BhWzEDX1UDCfOD/Q1q3hU1CnujUbSeWnQiqomZL6qQVMRrz02ANFFa03feZidAAGPXw1pUFbUJIIMaQQdFJ3kDfU1bs3omfWiNdAD5eGutV8OLYCiZnrss9eR86mV7SzlaB1OvnU0063hrB6aa78z4/7VNfYEaHr4gDcGomtIoXvKfb+E+dQ4ll/DoDpqN6Sjbok7A7awROlKm5F5n5ivKaQk32dS6ERl74jKd4hTG2tR4e+Q1vMAwka7EETI/3pUq0SvXsQsAW2YGSAGEnXUktzqO7btwWl2ZteS+qdB5UqVIBjYwXVIJZZaIEaLz8/Kn4y+bLqouEyuVWy6iRB8qVKmFS/bY21uekkA5AkHT6eNSvafu3GOdcwVtY3EAAUqVIyxVgG76K1K5fWJO53+HKoMOubMpHgDJ1PX3UqVANOH+6LJoJI8zPIfrTGEASzTDDlqNND59aVKgIsG6yDl/FMjdVA2E+NNuYcktlLECDJaCAOkUqVMPdbKpdU7kxznxYHSmB52iTDkkSfL415SoB1zDhLigGeRkSuu+nkamxQCN6MJJ5SdPZ0rylQEKWw6EozKVMGdR5DnUr31dXeO/pJ2209tKlQEFm0ziSAr9RpIPlVl7SnIJbOuaW5T+HTnSpUBJgVcA3GOYMMpE/iGqk9dqVpyLhTIJfUgHn0k8qVKgPMRhGKsdB3szSSecR0NWMPfTIyqSZG5G0fGKVKgGpb9KMjMcwMjoBzqcQvdOpUQehHUDrSpUgu8Nu5XCghhzzDarVtZOoBHSKVKpBpcd1TqAYP0FXbN9AD3dZ25UqVAMF0a93u8wfpTFuyIjUCB4a15SoN4+IuAkFhp4UqVKgP/9k=" style={{ marginTop: '2em' }} />
      
      </section>
      <section>Shins Down
      <p>Shins down accomplishes the same engagement; however, releaves any excess pressure on the low back. </p>
      <Image src= "https://dallasnews.imgix.net/1467138983-plank-modified.JPG"style={{ marginTop: '2em' }} />
      </section>
      </div>
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout