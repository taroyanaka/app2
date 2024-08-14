<script>
    let list_name = 'GAFAM';
    let urlList = `https://www.google.com
https://www.amazon.com
https://www.apple.com
https://www.microsoft.com
https://www.facebook.com`;

    let openVolume = 1;
    let urlListLines = [];
    let options = [];
    let urls = [];
    let error_message = '';

    // リアクティブに urlListLines と options を更新
    $: {
        urlListLines = urlList.split('\n').filter(line => line.trim() !== '');
        // 最大のurlListLinesは100。それ以上はエラーメッセージを表示
        if (urlListLines.length > 100) {
            error_message = 'URLリストは100行までです。';
        } else {
            error_message = '';
        }

        options = Array.from({ length: urlListLines.length }, (_, i) => i + 1);
        if (options.length > 0) {
			// max は options の最後の要素
            openVolume = Math.max(openVolume, options[options.length - 1]);
        }
    }

    function tabOpen(url) {
        window.open(url, '_blank');
    }

    function exe() {
        urls = urlListLines.slice(0, openVolume);
        urls.forEach(url => tabOpen(url));
    }
</script>

{#if error_message}
    <button id="error_message" on:click={() => error_message = ''} on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') error_message = ''; }} style="background: none; border: none; padding: 0; margin: 0; color: inherit; font: inherit; cursor: pointer;">
        {error_message}
    </button>
{/if}

<!-- list_name を表示 -->
<h2>{list_name}</h2>

<!-- openVolume の入力フィールド -->
<label for="openVolume">Open Volume:</label>
<input type="number" id="openVolume" bind:value={openVolume} min="1" max={options.length} />
<!-- textarea -->
<textarea bind:value={urlList} placeholder="URLリストを入力してください"></textarea>

<style>
    textarea {
        width: 100vw;
		height: 50vh;
    }
</style>
