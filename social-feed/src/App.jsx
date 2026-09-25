import { useState } from 'react'
import {
  ArrowUpRight,
  ArrowLeft,
  Bookmark,
  BookOpen,
  Check,
  Compass,
  Copy,
  Heart,
  Home,
  Image,
  MessageCircle,
  MessageSquare,
  MoreHorizontal,
  Palette,
  Search,
  Send,
  Share2,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import './App.css'

const initialPosts = [
  {
    id: 1,
    name: 'Maya Chen',
    handle: 'mayachen',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces',
    time: '18 min ago',
    location: 'Big Sur, California',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200&h=900&fit=crop',
    imageAlt: 'A quiet trail winding through a sunlit forest',
    caption: 'Took the long way down to the water this morning. The light did the rest. 🌿',
    likes: 248,
    shares: 12,
    comments: [
      { name: 'Leo Park', text: 'That light is unreal.' },
      { name: 'Nina Flores', text: 'Adding this to my list.' },
    ],
    commentCount: 18,
    liked: false,
    saved: false,
  },
  {
    id: 2,
    name: 'Jordan Ellis',
    handle: 'jordaneats',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces',
    time: '1 hr ago',
    location: 'Brooklyn, New York',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=900&fit=crop',
    imageAlt: 'A colorful table filled with a fresh weekend brunch',
    caption: 'Sunday market haul, turned into the kind of lunch that makes you cancel your plans.',
    likes: 96,
    shares: 8,
    comments: [{ name: 'Rae Kim', text: 'What are those little tomatoes?' }],
    commentCount: 7,
    liked: false,
    saved: false,
  },
  {
    id: 3,
    name: 'Sofia Laurent',
    handle: 'sofialaurent',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=96&h=96&fit=crop&crop=faces',
    time: '3 hrs ago',
    location: 'Lisbon, Portugal',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&h=900&fit=crop',
    imageAlt: 'Colorful hillside buildings overlooking the sea in Cinque Terre',
    caption: 'A few frames from a very slow afternoon. More of this, please.',
    likes: 421,
    shares: 34,
    comments: [],
    commentCount: 29,
    liked: false,
    saved: false,
  },
]

const initialConversations = [
  {
    id: 'maya',
    name: 'Maya Chen',
    handle: 'mayachen',
    avatar: initialPosts[0].avatar,
    online: true,
    messages: [
      { id: 1, from: 'them', text: 'Hey Alex! Did you make it down to the trail this weekend?', time: '10:42 AM' },
      { id: 2, from: 'you', text: 'I did, and it was even better than I expected.', time: '10:45 AM' },
      { id: 3, from: 'them', text: 'That sounds like exactly the reset I need.', time: '10:47 AM' },
    ],
  },
  {
    id: 'jordan',
    name: 'Jordan Ellis',
    handle: 'jordaneats',
    avatar: initialPosts[1].avatar,
    online: true,
    messages: [
      { id: 1, from: 'them', text: 'Found the best little market stall for tomatoes this morning.', time: '9:18 AM' },
      { id: 2, from: 'you', text: 'Save me a basket next time!', time: '9:23 AM' },
    ],
  },
  {
    id: 'sofia',
    name: 'Sofia Laurent',
    handle: 'sofialaurent',
    avatar: initialPosts[2].avatar,
    online: false,
    messages: [
      { id: 1, from: 'them', text: 'Sending you a few Lisbon recommendations later today.', time: 'Yesterday' },
    ],
  },
]

const palettes = [
  {
    id: 'instagram-light',
    source: 'Instagram',
    mode: 'Light mode',
    colors: { canvas: '#FAFAFA', surface: '#FFFFFF', surfaceAlt: '#F5F5F5', text: '#262626', primary: '#0095F6', accent: '#ED4956', border: '#DBDBDB', muted: '#8E8E8E', primarySoft: '#E7F3FF' },
  },
  {
    id: 'instagram-dark',
    source: 'Instagram',
    mode: 'Dark mode',
    colors: { canvas: '#000000', surface: '#121212', surfaceAlt: '#1C1C1C', text: '#F5F5F5', primary: '#0095F6', accent: '#ED4956', border: '#262626', muted: '#A8A8A8', primarySoft: '#09243A' },
  },
  {
    id: 'discord-light',
    source: 'Discord',
    mode: 'Light mode',
    colors: { canvas: '#F2F3F5', surface: '#FFFFFF', surfaceAlt: '#E3E5E8', text: '#2E3338', primary: '#5865F2', accent: '#EB459E', border: '#DCDDDE', muted: '#6A7480', primarySoft: '#E9EBFF' },
  },
  {
    id: 'discord-dark',
    source: 'Discord',
    mode: 'Dark mode',
    colors: { canvas: '#313338', surface: '#2B2D31', surfaceAlt: '#383A40', text: '#F2F3F5', primary: '#5865F2', accent: '#ED4245', border: '#3F4147', muted: '#B5BAC1', primarySoft: '#393E72' },
  },
  {
    id: 'slack-light',
    source: 'Slack',
    mode: 'Light mode',
    colors: { canvas: '#F8F8F8', surface: '#FFFFFF', surfaceAlt: '#F1F0F4', text: '#1D1C1D', primary: '#611F69', accent: '#36C5F0', border: '#DDDDDD', muted: '#696969', primarySoft: '#F0E7F1' },
  },
  {
    id: 'slack-dark',
    source: 'Slack',
    mode: 'Dark mode',
    colors: { canvas: '#1A1D21', surface: '#222529', surfaceAlt: '#303236', text: '#D1D2D3', primary: '#8B6EB2', accent: '#36C5F0', border: '#373A3F', muted: '#ABABAD', primarySoft: '#362D42' },
  },
]

function App() {
  const [posts, setPosts] = useState(initialPosts)
  const [search, setSearch] = useState('')
  const [openComments, setOpenComments] = useState({})
  const [drafts, setDrafts] = useState({})
  const [activeView, setActiveView] = useState('feed')
  const [conversations, setConversations] = useState(initialConversations)
  const [activeConversationId, setActiveConversationId] = useState('maya')
  const [messageDraft, setMessageDraft] = useState('')
  const [chatSearch, setChatSearch] = useState('')
  const [pendingSharePostId, setPendingSharePostId] = useState(null)
  const [mobileChatListOpen, setMobileChatListOpen] = useState(false)
  const [selectedPaletteId, setSelectedPaletteId] = useState('fieldnote')
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [shareDialogPostId, setShareDialogPostId] = useState(null)
  const [shareFeedback, setShareFeedback] = useState('')
  const [storyPostId, setStoryPostId] = useState(null)
  const [storyToast, setStoryToast] = useState('')

  function updatePost(postId, update) {
    setPosts((currentPosts) =>
      currentPosts.map((post) => (post.id === postId ? update(post) : post)),
    )
  }

  function addComment(event, post) {
    event.preventDefault()
    const text = drafts[post.id]?.trim()
    if (!text) return

    updatePost(post.id, (currentPost) => ({
      ...currentPost,
      comments: [...currentPost.comments, { name: 'You', text }],
      commentCount: currentPost.commentCount + 1,
    }))
    setDrafts((currentDrafts) => ({ ...currentDrafts, [post.id]: '' }))
  }

  function openMessages(conversationId = activeConversationId) {
    setActiveConversationId(conversationId)
    setPendingSharePostId(null)
    setActiveView('messages')
    setMobileChatListOpen(false)
  }

  function beginShare(postId) {
    setShareDialogPostId(postId)
    setShareFeedback('')
  }

  function sendPostToContact(postId) {
    setPendingSharePostId(postId)
    setShareDialogPostId(null)
    setActiveView('messages')
    setMobileChatListOpen(true)
  }

  async function copyPostLink(post) {
    const postUrl = `${window.location.origin}${window.location.pathname}#post-${post.id}`
    try {
      await navigator.clipboard.writeText(postUrl)
      updatePost(post.id, (currentPost) => ({ ...currentPost, shares: currentPost.shares + 1 }))
      setShareFeedback('Link copied to clipboard.')
    } catch {
      setShareFeedback(`Copy unavailable. Link: ${postUrl}`)
    }
  }

  function addPostToStory(post) {
    setStoryPostId(post.id)
    updatePost(post.id, (currentPost) => ({ ...currentPost, shares: currentPost.shares + 1 }))
    setShareDialogPostId(null)
    setStoryToast('Added to your story.')
  }

  async function shareOutsideApp(post) {
    const postUrl = `${window.location.origin}${window.location.pathname}#post-${post.id}`
    if (!navigator.share) {
      await copyPostLink(post)
      return
    }

    try {
      await navigator.share({ title: `A post from ${post.name}`, text: post.caption, url: postUrl })
      updatePost(post.id, (currentPost) => ({ ...currentPost, shares: currentPost.shares + 1 }))
      setShareDialogPostId(null)
    } catch (error) {
      if (error.name !== 'AbortError') setShareFeedback('Could not open the share sheet. Try copying the link instead.')
    }
  }

  function sendMessage(event) {
    event.preventDefault()
    const text = messageDraft.trim()
    if (!text && !pendingSharePostId) return

    const message = {
      id: Date.now(),
      from: 'you',
      text,
      postId: pendingSharePostId,
      time: 'now',
    }

    setConversations((current) => current.map((conversation) =>
      conversation.id === activeConversationId
        ? { ...conversation, messages: [...conversation.messages, message] }
        : conversation,
    ))
    if (pendingSharePostId) {
      updatePost(pendingSharePostId, (post) => ({ ...post, shares: post.shares + 1 }))
    }
    setMessageDraft('')
    setPendingSharePostId(null)
  }

  const visiblePosts = posts.filter((post) =>
    `${post.name} ${post.handle} ${post.caption} ${post.location}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  )
  const selectedConversation = conversations.find((conversation) => conversation.id === activeConversationId)
  const pendingSharePost = posts.find((post) => post.id === pendingSharePostId)
  const shareDialogPost = posts.find((post) => post.id === shareDialogPostId)
  const yourStoryPost = posts.find((post) => post.id === storyPostId)
  const selectedPalette = palettes.find((palette) => palette.id === selectedPaletteId)
  const activeColors = selectedPalette?.colors ?? {
    canvas: '#F7F8F4', surface: '#FFFFFF', surfaceAlt: '#F2F4ED', text: '#252C26', primary: '#356B53', accent: '#D77B68', border: '#E9EBE5', muted: '#858B82', primarySoft: '#EDF2EC',
  }
  const visibleConversations = conversations.filter((conversation) =>
    `${conversation.name} ${conversation.handle}`.toLowerCase().includes(chatSearch.toLowerCase()),
  )

  return (
    <div className="app-shell" data-mode={selectedPalette?.mode === 'Dark mode' ? 'dark' : 'light'} style={{ '--ink': activeColors.text, '--green': activeColors.primary, '--coral': activeColors.accent, '--muted': activeColors.muted, '--line': activeColors.border, '--paper': activeColors.canvas, '--surface': activeColors.surface, '--surface-soft': activeColors.surfaceAlt, '--primary-soft': activeColors.primarySoft }}>
      <header className="topbar">
        <a className="wordmark" href="#feed" aria-label="Fieldnote home" onClick={() => { setActiveView('feed'); setPendingSharePostId(null) }}>
          <span className="wordmark-mark"><Sparkles size={17} /></span>
          fieldnote<span className="wordmark-period">.</span>
        </a>
        <label className="search-box">
          <Search size={17} aria-hidden="true" />
          <input
            aria-label="Search posts"
            placeholder="Search people, places, moments"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <kbd>⌘ K</kbd>
        </label>
        <button className="topbar-compose" type="button" title="Create a post">
          <Image size={17} />
          <span>New post</span>
        </button>
        <button className="topbar-messages" type="button" title="Messages" aria-label="Open messages" onClick={() => openMessages()}>
          <MessageSquare size={19} />
          <span className="message-unread-dot" />
        </button>
        <button className="topbar-theme" type="button" title="Color palettes" aria-label="Open color palettes" aria-haspopup="dialog" onClick={() => setPaletteOpen(true)}>
          <Palette size={18} />
        </button>
        <img
          className="topbar-avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&fit=crop&crop=faces"
          alt="Your profile"
        />
      </header>

      {paletteOpen && <div className="palette-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setPaletteOpen(false) }}>
        <section className="palette-dialog" role="dialog" aria-modal="true" aria-labelledby="palette-title">
          <header className="palette-header"><div><span className="eyebrow">SIX COLOR STUDIES</span><h2 id="palette-title">Choose a palette<span>.</span></h2><p>Inspired by the light and dark interfaces of familiar social spaces.</p></div><button type="button" className="palette-close" aria-label="Close palettes" onClick={() => setPaletteOpen(false)}><X size={19} /></button></header>
          <div className="palette-grid">
            {palettes.map((palette) => <button className={`palette-card ${selectedPaletteId === palette.id ? 'chosen' : ''}`} type="button" key={palette.id} aria-pressed={selectedPaletteId === palette.id} onClick={() => setSelectedPaletteId(palette.id)}>
              <span className="palette-source">INSPIRED BY {palette.source.toUpperCase()}</span>
              <span className="palette-name">{palette.source} <span>{palette.mode}</span>{selectedPaletteId === palette.id && <Check size={15} />}</span>
              <span className="palette-swatches">
                {[['Canvas', palette.colors.canvas], ['Surface', palette.colors.surface], ['Text', palette.colors.text], ['Brand', palette.colors.primary], ['Accent', palette.colors.accent], ['Border', palette.colors.border]].map(([label, hex]) => <span className="palette-swatch" key={label}>
                  <span className="swatch-color" style={{ background: hex }} />
                  <span className="swatch-label">{label}</span><code>{hex}</code>
                </span>)}
              </span>
            </button>)}
          </div>
          <div className="palette-footnote">Unofficial color studies; brand names identify the interfaces that inspired each palette.</div>
        </section>
      </div>}

      {shareDialogPost && <div className="share-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setShareDialogPostId(null) }}>
        <section className="share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-title">
          <header className="share-dialog-header"><div><span className="eyebrow">PASS A MOMENT ALONG</span><h2 id="share-title">Share this post<span>.</span></h2></div><button className="share-close" type="button" aria-label="Close share options" onClick={() => setShareDialogPostId(null)}><X size={18} /></button></header>
          <div className="share-preview"><img src={shareDialogPost.image} alt={shareDialogPost.imageAlt} /><div><span>POST FROM {shareDialogPost.name.toUpperCase()}</span><p>{shareDialogPost.caption}</p></div></div>
          <div className="share-options">
            <button type="button" className="share-option" onClick={() => copyPostLink(shareDialogPost)}><span className="share-option-icon copy-icon"><Copy size={18} /></span><span><strong>Copy link</strong><small>Paste it anywhere</small></span><ArrowUpRight size={16} /></button>
            <button type="button" className="share-option" onClick={() => sendPostToContact(shareDialogPost.id)}><span className="share-option-icon contact-icon"><MessageCircle size={18} /></span><span><strong>Send to a contact</strong><small>Share in a private message</small></span><ArrowUpRight size={16} /></button>
            <button type="button" className="share-option" onClick={() => addPostToStory(shareDialogPost)}><span className="share-option-icon story-icon"><BookOpen size={18} /></span><span><strong>Add to your story</strong><small>Share with your followers</small></span><ArrowUpRight size={16} /></button>
            <button type="button" className="share-option" onClick={() => shareOutsideApp(shareDialogPost)}><span className="share-option-icon other-icon"><Share2 size={18} /></span><span><strong>More sharing options</strong><small>Open your device share menu</small></span><ArrowUpRight size={16} /></button>
          </div>
          {shareFeedback && <p className="share-feedback" role="status">{shareFeedback}</p>}
        </section>
      </div>}
      {storyToast && <div className="story-toast" role="status"><Check size={16} /><span>{storyToast}</span>{yourStoryPost && <img src={yourStoryPost.image} alt="" />}<button type="button" aria-label="Dismiss story confirmation" onClick={() => setStoryToast('')}><X size={15} /></button></div>}

      <div className={`page-grid ${activeView === 'messages' ? 'messages-mode' : ''}`}>
        <aside className="left-rail" aria-label="Main navigation">
          <div className="profile-mini">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&fit=crop&crop=faces" alt="" />
            <div><strong>Alex Morgan</strong><span>@alexmorgan</span></div>
            <MoreHorizontal size={19} />
          </div>
          <nav className="main-nav">
            <button className={`nav-item ${activeView === 'feed' ? 'active' : ''}`} type="button" onClick={() => setActiveView('feed')}><Home size={18} /> Feed {activeView === 'feed' && <span className="nav-dot" />}</button>
            <button className={`nav-item ${activeView === 'messages' ? 'active' : ''}`} type="button" onClick={() => openMessages()}><MessageSquare size={18} /> Messages <span className="unread-count">2</span></button>
            <a className="nav-item" href="#discover"><Compass size={18} /> Discover</a>
            <a className="nav-item" href="#community"><Users size={18} /> Community</a>
            <a className="nav-item" href="#saved"><Bookmark size={18} /> Saved</a>
          </nav>
          <div className="rail-divider" />
          <div className="rail-heading">YOUR CORNERS <button type="button" title="Add a corner">+</button></div>
          <a className="corner-link" href="#slow-living"><span className="corner-icon sage">S</span> Slow living <span>12</span></a>
          <a className="corner-link" href="#weekend-table"><span className="corner-icon peach">W</span> Weekend table <span>4</span></a>
          <a className="corner-link" href="#little-trips"><span className="corner-icon blue">L</span> Little trips <span>8</span></a>
          <div className="rail-note"><span>✳</span><p>A little corner of the internet for the things worth noticing.</p></div>
          <div className="rail-footer"><a href="#about">About</a><a href="#guidelines">Guidelines</a><span>© 2026 fieldnote</span></div>
        </aside>

        {activeView === 'feed' ? <main className="feed-column" id="feed">
          <div className="feed-heading">
            <div><span className="eyebrow">FRIDAY, SEPTEMBER 25</span><h1>Your feed<span>.</span></h1></div>
            <button className="feed-filter" type="button">For you <span>⌄</span></button>
          </div>

          <section className="stories" aria-label="People to catch up with">
            <button className="story-item" type="button" onClick={() => yourStoryPost && setStoryToast(`Your story features ${yourStoryPost.name}'s post.`)}><span className={`story-ring add-story ${yourStoryPost ? 'story-published' : ''}`}>{yourStoryPost ? <img src={yourStoryPost.image} alt="" /> : <span>+</span>}</span><span>{yourStoryPost ? 'Your story · 1' : 'Your story'}</span></button>
            <button className="story-item" type="button"><span className="story-ring"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces" alt="" /></span><span>Amara</span></button>
            <button className="story-item" type="button"><span className="story-ring"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&crop=faces" alt="" /></span><span>Devon</span></button>
            <button className="story-item" type="button"><span className="story-ring"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&fit=crop&crop=faces" alt="" /></span><span>Priya</span></button>
            <button className="story-item" type="button"><span className="story-ring"><img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=96&h=96&fit=crop&crop=faces" alt="" /></span><span>Oliver</span></button>
            <button className="story-item" type="button"><span className="story-ring"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces" alt="" /></span><span>Yuki</span></button>
          </section>

          <div className="feed-divider"><span>FRESH FROM YOUR PEOPLE</span><span className="divider-line" /></div>

          <div className="posts-list">
            {visiblePosts.map((post, index) => (
              <article className="post" id={`post-${post.id}`} key={post.id} style={{ '--post-index': index }}>
                <div className="post-header">
                  <img className="author-avatar" src={post.avatar} alt="" />
                  <div className="author-meta"><strong>{post.name} <Check size={13} /></strong><span>@{post.handle} <i>·</i> {post.time}</span></div>
                  <button className="icon-button more-button" type="button" aria-label={`More options for ${post.name}'s post`}><MoreHorizontal size={21} /></button>
                </div>
                <p className="post-caption">{post.caption}</p>
                <div className="post-location"><Compass size={13} /> {post.location}</div>
                <img className="post-image" src={post.image} alt={post.imageAlt} />
                <div className="post-stats">
                  <span className="like-summary"><span className="tiny-heart"><Heart size={10} fill="currentColor" /></span>{post.likes} appreciations</span>
                  <span>{post.commentCount} comments <i>·</i> {post.shares} shares</span>
                </div>
                <div className="post-actions">
                  <button className={post.liked ? 'post-action liked' : 'post-action'} type="button" aria-pressed={post.liked} onClick={() => updatePost(post.id, (currentPost) => ({ ...currentPost, liked: !currentPost.liked, likes: currentPost.likes + (currentPost.liked ? -1 : 1) }))}>
                    <Heart size={18} fill={post.liked ? 'currentColor' : 'none'} /> Like
                  </button>
                  <button className="post-action" type="button" aria-expanded={Boolean(openComments[post.id])} onClick={() => setOpenComments((current) => ({ ...current, [post.id]: !current[post.id] }))}>
                    <MessageCircle size={18} /> Comment
                  </button>
                  <button className="post-action" type="button" onClick={() => beginShare(post.id)}>
                    <Send size={17} /> Share
                  </button>
                  <button className={post.saved ? 'icon-button saved' : 'icon-button save-button'} type="button" title={post.saved ? 'Remove from saved' : 'Save post'} aria-label={post.saved ? 'Remove from saved' : 'Save post'} onClick={() => updatePost(post.id, (currentPost) => ({ ...currentPost, saved: !currentPost.saved }))}>
                    <Bookmark size={18} fill={post.saved ? 'currentColor' : 'none'} />
                  </button>
                </div>
                {openComments[post.id] && (
                  <div className="comments-panel">
                    {post.comments.map((comment, commentIndex) => <p className="comment" key={`${post.id}-${commentIndex}`}><strong>{comment.name}</strong> {comment.text}</p>)}
                    {post.comments.length === 0 && <p className="quiet-comment">Start the conversation.</p>}
                    <form className="comment-form" onSubmit={(event) => addComment(event, post)}>
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&fit=crop&crop=faces" alt="" />
                      <input aria-label="Write a comment" placeholder="Add a thoughtful comment..." value={drafts[post.id] || ''} onChange={(event) => setDrafts((current) => ({ ...current, [post.id]: event.target.value }))} />
                      <button type="submit" aria-label="Post comment" disabled={!drafts[post.id]?.trim()}><Send size={16} /></button>
                    </form>
                  </div>
                )}
              </article>
            ))}
            {visiblePosts.length === 0 && <div className="empty-state"><Search size={21} /><strong>No moments found</strong><span>Try another name, place, or phrase.</span></div>}
          </div>
        </main> : <main className="messages-area" aria-label="Messages">
          <div className="messages-page-heading">
            <div><span className="eyebrow">YOUR PEOPLE, CLOSE BY</span><h1>Messages<span>.</span></h1></div>
            <span className="private-note"><span /> Just between you</span>
          </div>
          <section className={`messages-view ${mobileChatListOpen ? 'list-open' : ''}`}>
            <aside className="chat-list" aria-label="Conversations">
              <div className="chat-list-heading"><div><h2>Inbox</h2><span>{conversations.length} conversations</span></div><button type="button" title="New message" aria-label="New message" onClick={() => { setChatSearch(''); setMobileChatListOpen(true) }}><MessageSquare size={17} /></button></div>
              <label className="chat-search"><Search size={15} /><input aria-label="Search conversations" placeholder="Find someone" value={chatSearch} onChange={(event) => setChatSearch(event.target.value)} /></label>
              <div className="conversation-list">
                {visibleConversations.map((conversation) => {
                  const latestMessage = conversation.messages[conversation.messages.length - 1]
                  return <button className={`conversation-item ${conversation.id === activeConversationId ? 'selected' : ''}`} type="button" key={conversation.id} onClick={() => { setActiveConversationId(conversation.id); setMobileChatListOpen(false) }}>
                    <span className="conversation-avatar"><img src={conversation.avatar} alt="" />{conversation.online && <i />}</span>
                    <span className="conversation-copy"><strong>{conversation.name}</strong><span>{latestMessage.postId ? 'Shared a post' : latestMessage.text}</span></span>
                    <span className="conversation-time">{latestMessage.time}</span>
                  </button>
                })}
                {visibleConversations.length === 0 && <p className="no-conversations">No people found.</p>}
              </div>
              <p className="chat-list-footnote">Your conversations stay yours.</p>
            </aside>

            <section className="chat-panel" aria-label={`Chat with ${selectedConversation.name}`}>
              <header className="chat-header">
                <button className="chat-back" type="button" aria-label="Back to conversations" onClick={() => setMobileChatListOpen(true)}><ArrowLeft size={18} /></button>
                <span className="conversation-avatar"><img src={selectedConversation.avatar} alt="" />{selectedConversation.online && <i />}</span>
                <div className="chat-person"><strong>{selectedConversation.name}</strong><span>{selectedConversation.online ? 'Here now' : `@${selectedConversation.handle}`}</span></div>
                <button className="icon-button chat-more" type="button" aria-label="Conversation options"><MoreHorizontal size={20} /></button>
              </header>
              <div className="chat-history" aria-live="polite">
                <div className="chat-date">TODAY</div>
                {selectedConversation.messages.map((message) => {
                  const sharedPost = message.postId ? posts.find((post) => post.id === message.postId) : null
                  return <div className={`message-row ${message.from === 'you' ? 'message-sent' : 'message-received'}`} key={message.id}>
                    {message.from !== 'you' && <img className="message-avatar" src={selectedConversation.avatar} alt="" />}
                    <div className="message-content">
                      {message.text && <p className="message-bubble">{message.text}</p>}
                      {sharedPost && <article className="shared-post-card"><img src={sharedPost.image} alt={sharedPost.imageAlt} /><div><span>POST FROM {sharedPost.name.toUpperCase()}</span><p>{sharedPost.caption}</p></div></article>}
                      <span className="message-time">{message.time}</span>
                    </div>
                  </div>
                })}
              </div>
              <div className="chat-compose-wrap">
                {pendingSharePost && <div className="pending-share"><img src={pendingSharePost.image} alt="" /><div><span>READY TO SHARE WITH {selectedConversation.name.toUpperCase()}</span><strong>{pendingSharePost.caption}</strong></div><button type="button" aria-label="Cancel post share" onClick={() => setPendingSharePostId(null)}><X size={16} /></button></div>}
                <form className="chat-composer" onSubmit={sendMessage}>
                  <input aria-label="Write a message" placeholder={`Message ${selectedConversation.name.split(' ')[0]}...`} value={messageDraft} onChange={(event) => setMessageDraft(event.target.value)} />
                  <button className="chat-send" type="submit" aria-label="Send message" disabled={!messageDraft.trim() && !pendingSharePostId}><Send size={17} /></button>
                </form>
                <span className="composer-hint">A little note goes a long way.</span>
              </div>
            </section>
          </section>
        </main>}

        {activeView === 'feed' && <aside className="right-rail">
          <section className="welcome-block"><span className="welcome-mark">✳</span><div><span className="eyebrow">A GOOD PLACE TO BE</span><h2>Make room for<br />good things.</h2><p>Small moments. Shared freely.</p></div></section>
          <section className="suggestions"><div className="section-title"><h2>People to know</h2><button type="button">See all</button></div>
            <div className="suggestion"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces" alt="" /><div><strong>Amara Okafor</strong><span>Designing a slower life</span></div><button className="follow-button" type="button" aria-label="Follow Amara Okafor">+</button></div>
            <div className="suggestion"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&crop=faces" alt="" /><div><strong>Devon Reed</strong><span>Outside, whenever possible</span></div><button className="follow-button" type="button" aria-label="Follow Devon Reed">+</button></div>
            <div className="suggestion"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&fit=crop&crop=faces" alt="" /><div><strong>Priya Shah</strong><span>Home cook &amp; collector</span></div><button className="follow-button" type="button" aria-label="Follow Priya Shah">+</button></div>
          </section>
          <section className="corner-feature"><div className="feature-photo" /><div className="feature-copy"><span className="eyebrow">A CORNER FOR YOU</span><h2>Little rituals</h2><p>People finding joy in the everyday.</p><a href="#little-rituals">Explore corner <ArrowUpRight size={14} /></a></div></section>
          <div className="right-footer"><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#help">Help</a><span>Made for noticing.</span></div>
        </aside>}
      </div>
    </div>
  )
}

export default App
