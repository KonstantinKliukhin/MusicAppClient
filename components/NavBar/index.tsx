import { Avatar, Dropdown, Link, Navbar, Text, useTheme } from '@nextui-org/react'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme as useNextTheme } from 'next-themes'

const menuItems = [
  {
    href: '/',
    text: 'Main page',
  },
  {
    href: '/tracks',
    text: 'Track List',
  },
  {
    href: '/albums',
    text: 'Albums List',
  },
]

export default function NavBar() {
  const router = useRouter()
  const activeIndex = useMemo(
    () => menuItems.findIndex(({ href }) => href === router.route),
    [router.route],
  )

  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()
  return (
    <Navbar isBordered variant='sticky'>
      <Navbar.Toggle showIn='xs' />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        <Text b color='inherit' hideIn='xs'>
          Spotify
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor='secondary'
        hideIn='xs'
        variant='highlight-rounded'
      >
        {menuItems.map(({ text, href }, index) => (
          <Navbar.Link isActive={index === activeIndex} key={href} href={href}>
            {text}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      {/*<Navbar.Content*/}
      {/*    css={{*/}
      {/*        "@xs": {*/}
      {/*            w: "12%",*/}
      {/*            jc: "flex-end",*/}
      {/*        },*/}
      {/*    }}*/}
      {/*>*/}
      {/*    <Dropdown placement="bottom-right">*/}
      {/*        <Navbar.Item>*/}
      {/*            <Dropdown.Trigger>*/}
      {/*                <Avatar*/}
      {/*                    bordered*/}
      {/*                    as="button"*/}
      {/*                    color="secondary"*/}
      {/*                    size="md"*/}
      {/*                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"*/}
      {/*                />*/}
      {/*            </Dropdown.Trigger>*/}
      {/*        </Navbar.Item>*/}
      {/*        <Dropdown.Menu*/}
      {/*            aria-label="User menu actions"*/}
      {/*            color="secondary"*/}
      {/*            onAction={(actionKey) => console.log({actionKey})}*/}
      {/*        >*/}
      {/*            <Dropdown.Item key="profile" css={{height: "$18"}}>*/}
      {/*                <Text b color="inherit" css={{d: "flex"}}>*/}
      {/*                    Signed in as*/}
      {/*                </Text>*/}
      {/*                <Text b color="inherit" css={{d: "flex"}}>*/}
      {/*                    zoey@example.com*/}
      {/*                </Text>*/}
      {/*            </Dropdown.Item>*/}
      {/*            <Dropdown.Item key="settings" withDivider>*/}
      {/*                My Settings*/}
      {/*            </Dropdown.Item>*/}
      {/*            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>*/}
      {/*            <Dropdown.Item key="analytics" withDivider>*/}
      {/*                Analytics*/}
      {/*            </Dropdown.Item>*/}
      {/*            <Dropdown.Item key="system">System</Dropdown.Item>*/}
      {/*            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>*/}
      {/*            <Dropdown.Item key="help_and_feedback" withDivider>*/}
      {/*                Help & Feedback*/}
      {/*            </Dropdown.Item>*/}
      {/*            <Dropdown.Item key="logout" withDivider color="error">*/}
      {/*                Log Out*/}
      {/*            </Dropdown.Item>*/}
      {/*        </Dropdown.Menu>*/}
      {/*    </Dropdown>*/}
      {/*</Navbar.Content>*/}
      <Navbar.Content
        css={{
          '@xs': {
            w: '12%',
            jc: 'flex-end',
          },
        }}
      >
        <div className={'ml-3'}>
          {isDark ? (
            <DarkModeIcon className={'cursor-pointer'} onClick={() => setTheme('light')} />
          ) : (
            <LightModeIcon className={'cursor-pointer'} onClick={() => setTheme('dark')} />
          )}
        </div>
      </Navbar.Content>
      <Navbar.Collapse>
        {menuItems.map(({ href, text }, index) => (
          <Navbar.CollapseItem key={href} activeColor='secondary' isActive={index === activeIndex}>
            <Link
              color='inherit'
              css={{
                minWidth: '100%',
              }}
              href={href}
            >
              {text}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
