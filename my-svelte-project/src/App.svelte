<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const firebaseConfig = {
        apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
        authDomain: "p2auth-ea50a.firebaseapp.com",
        projectId: "p2auth-ea50a",
        storageBucket: "p2auth-ea50a.appspot.com",
        messagingSenderId: "796225429484",
        appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
    };
    firebase.initializeApp(firebaseConfig);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    let list_name = 'GAFAM';
    let url_list = `https://www.google.com
https://www.amazon.com
https://www.apple.com
https://www.microsoft.com
https://www.facebook.com`;

    let open_volume = 1;
    let url_list_lines = [];
    let options = [];
    let urls = [];
    let error_message = '';
    let is_editing_list_name = false;
    let user = null;
    let uid = "";
    let loginResult = 'Not logged in';
    let web_data = writable([]);

    // リアクティブに url_list_lines と options を更新
    $: {
        url_list_lines = url_list.split('\n').filter(line => line.trim() !== '');
        if (url_list_lines.length > 100) {
            error_message = 'URLリストは100行までです。';
        } else {
            error_message = '';
        }

        options = Array.from({ length: url_list_lines.length }, (_, i) => i + 1);
        if (options.length > 0) {
            open_volume = Math.max(open_volume, options[options.length - 1]);
        }
    }

    function tabOpen(url) {
        window.open(url, '_blank');
    }

    async function exe() {
        urls = url_list_lines.slice(0, open_volume);
        urls.forEach(url => tabOpen(url));
    }

    function toggleEditListName() {
        is_editing_list_name = !is_editing_list_name;
    }

    function updateListName() {
        is_editing_list_name = false;
    }

    function checkLogin() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
                this.loginResult = `Logged in as: ${user.displayName}`;
            } else {
                this.user = null;
                this.loginResult = 'Not logged in';
            }
        });
    }

    function googleLogin() {
        firebase.auth().signInWithPopup(googleProvider).then(result => {
            this.user = result.user;
            this.loginResult = `Logged in as: ${this.user.displayName}`;
        }).catch(error => {
            console.error('Error during Google login:', error);
            alert('Google login failed. ' + error.message);
        });
    }

    function signOut() {
        firebase.auth().signOut().then(() => {
            this.user = null;
            this.loginResult = 'Not logged in';
        }).catch(error => {
            console.error('Error during sign-out:', error);
            alert('Sign out failed. ' + error.message);
        });
    }

    async function fetchData() {
        try {
            const response = await fetch('https://cotton-concrete-catsup.glitch.me/pop_up_url/read', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uid })
            });
            const data = await response.json();
            if (Array.isArray(data.all_json)) {
                web_data.set(data.all_json);
            } else {
                console.error("Fetched data is not an array:", data.all_json);
                web_data.set([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function createData() {
        try {
            const response = await fetch('https://cotton-concrete-catsup.glitch.me/pop_up_url/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid,
                    url_name: list_name,
                    url_list
                })
            });
            const result = await response.json();
            console.log('Create result:', result);
            fetchData(); // Refresh data after creating
        } catch (error) {
            console.error('Error creating data:', error);
        }
    }

    async function updateData(id) {
        try {
            const response = await fetch('https://cotton-concrete-catsup.glitch.me/pop_up_url/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    uid,
                    url_name: list_name,
                    url_list
                })
            });
            const result = await response.json();
            console.log('Update result:', result);
            fetchData(); // Refresh data after updating
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }

    async function deleteData(id) {
        try {
            const response = await fetch('https://cotton-concrete-catsup.glitch.me/pop_up_url/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, uid })
            });
            const result = await response.json();
            console.log('Delete result:', result);
            fetchData(); // Refresh data after deleting
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    onMount(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            user = currentUser;
            if (user) {
                uid = user.uid;
                loginResult = `Logged in as: ${user.displayName}`;
                fetchData();
            }
        });
    });
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .content {
        display: flex;
        width: 100%;
    }
    .left-column, .right-column {
        flex: 1;
        padding: 10px;
    }
    textarea {
        width: 100%;
        height: 50vh;
    }
</style>

<div class="container">
    <div class="header">
        <h1>サービス名</h1>
        {#if user}
            <button on:click={signOut}>Logout</button>
        {:else}
            <button on:click={googleLogin}>Login</button>
        {/if}
    </div>
    <div class="content">
        <div class="left-column">
            <ul>
                {#each $web_data as item}
                    <li>
                        {item.url_name}
                        <button on:click={() => url_list = item.url_list}>Load</button>
                        <button on:click={() => updateData(item.id)}>Update</button>
                        <button on:click={() => deleteData(item.id)}>Delete</button>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="right-column">
            {#if error_message}
                <button id="error_message" on:click={() => error_message = ''} on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') error_message = ''; }} style="background: none; border: none; padding: 0; margin: 0; color: inherit; font: inherit; cursor: pointer;">
                    {error_message}
                </button>
            {/if}

            {#if is_editing_list_name}
                <input type="text" bind:value={list_name} />
                <button on:click={updateListName}>Update</button>
            {:else}
                <button on:click={toggleEditListName}>Change List Name</button>
            {/if}

            <label for="open_volume">Open Volume:</label>
            <input type="number" id="open_volume" bind:value={open_volume} min="1" max={options.length} />
            <textarea bind:value={url_list} placeholder="URLリストを入力してください"></textarea>
            <button on:click={exe}>実行</button>
            <button on:click={
