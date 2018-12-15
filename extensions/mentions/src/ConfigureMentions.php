<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Mentions;

use Flarum\Http\UrlGenerator;
use s9e\TextFormatter\Configurator;

class ConfigureMentions
{
    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @param UrlGenerator $url
     */
    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    public function __invoke(Configurator $config)
    {
        $this->configureUserMentions($config);
        $this->configurePostMentions($config);
    }

    private function configureUserMentions(Configurator $config)
    {
        $config->rendering->parameters['PROFILE_URL'] = $this->url->to('forum')->route('user', ['username' => '']);

        $tagName = 'USERMENTION';

        $tag = $config->tags->add($tagName);
        $tag->attributes->add('username');
        $tag->attributes->add('displayname');
        $tag->attributes->add('id')->filterChain->append('#uint');

        $tag->template = '<a href="{$PROFILE_URL}{@username}" class="UserMention">@<xsl:value-of select="@displayname"/></a>';
        $tag->filterChain->prepend([static::class, 'addUserId'])
            ->setJS('function(tag) { return flarum.extensions["flarum-mentions"].filterUserMentions(tag); }');

        $config->Preg->match('/\B@(?<username>[a-z0-9_-]+)(?!#)/i', $tagName);
    }

    /**
     * @param $tag
     *
     * @return bool
     */
    public static function addUserId($tag)
    {
        if ($user = User::where('username', 'like', $tag->getAttribute('username'))->first()) {
            $tag->setAttribute('id', $user->id);
            $tag->setAttribute('displayname', $user->display_name);

            return true;
        }
    }

    private function configurePostMentions(Configurator $config)
    {
        $config->rendering->parameters['PROFILE_URL'] = $this->url->to('forum')->route('user', ['username' => '']);

        $tagName = 'USERMENTION';

        $tag = $config->tags->add($tagName);
        $tag->attributes->add('username');
        $tag->attributes->add('displayname');
        $tag->attributes->add('id')->filterChain->append('#uint');

        $tag->template = '<a href="{$PROFILE_URL}{@username}" class="UserMention">@<xsl:value-of select="@displayname"/></a>';
        $tag->filterChain->prepend([static::class, 'addPostId'])
            ->setJS('function(tag) { return flarum.extensions["flarum-mentions"].filterUserMentions(tag); }');

        $config->Preg->match('/\B@(?<username>[a-z0-9_-]+)(?!#)/i', $tagName);
    }

    /**
     * @param $tag
     * @return bool
     */
    public static function addPostId($tag)
    {
        $post = CommentPost::find($tag->getAttribute('id'));

        if ($post) {
            $tag->setAttribute('discussionid', (int) $post->discussion_id);
            $tag->setAttribute('number', (int) $post->number);
            $tag->setAttribute('displayname', $post->user->display_name);

            return true;
        }
    }
}
