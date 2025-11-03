import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { title, body: issueBody, labels } = body;

    // You'll need to set this environment variable in your deployment
    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    const REPO_OWNER = 'lorenzpfei';
    const REPO_NAME = 'anki-vacation-tts';

    if (!GITHUB_TOKEN) {
      return new Response(
        JSON.stringify({ error: 'GitHub token not configured' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body: issueBody,
        labels,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GitHub API error:', errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to create GitHub issue' }),
        { 
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const issueData = await response.json();
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        issue_url: issueData.html_url 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};