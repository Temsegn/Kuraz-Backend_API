const output = document.getElementById('output');
let currentEditTid = null;

async function getAllTasks() {
  try {
    const res = await fetch('/api/tasks');
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
    hideEditForm();
  } catch (error) {
    alert('Error fetching tasks');
  }
}

async function getTaskByTid() {
  const tid = document.getElementById('tidInput').value.trim();
  if (!tid) {
    alert('Please enter a tid');
    return;
  }
  try {
    const res = await fetch(`/api/tasks/${tid}`);
    if (!res.ok) throw new Error('Task not found');
    const task = await res.json();

    showEditForm(task);

    output.textContent = JSON.stringify(task, null, 2);
  } catch (error) {
    alert(error.message);
    output.textContent = '';
    hideEditForm();
  }
}

async function deleteTask() {
  const tid = document.getElementById('tidInput').value.trim();
  if (!tid) {
    alert('Please enter a tid');
    return;
  }
  try {
    const res = await fetch(`/api/tasks/${tid}`, { method: 'DELETE' });
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
    hideEditForm();
  } catch (error) {
    alert('Failed to delete task');
  }
}

function showEditForm(task) {
  currentEditTid = task.tid;
  const editForm = document.querySelector('.edit-task');
  editForm.style.display = 'flex';

  document.getElementById('edit_tid').value = task.tid;
  document.getElementById('edit_title').value = task.title || '';
  document.getElementById('edit_description').value = task.description || '';
  document.getElementById('edit_priority').value = task.priority || '';
  document.getElementById('edit_completed').checked = task.completed || false;
}

function hideEditForm() {
  currentEditTid = null;
  const editForm = document.querySelector('.edit-task');
  editForm.style.display = 'none';
}

async function submitUpdateTask() {
  if (!currentEditTid) {
    alert('No task loaded for update');
    return;
  }

  const updatedTask = {
    title: document.getElementById('edit_title').value.trim(),
    description: document.getElementById('edit_description').value.trim(),
    priority: document.getElementById('edit_priority').value.trim(),
    completed: document.getElementById('edit_completed').checked,
  };

  try {
    const res = await fetch(`/api/tasks/${currentEditTid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to update task');
    }
    const updated = await res.json();
    output.textContent = JSON.stringify(updated, null, 2);
    alert('Task updated successfully!');
  } catch (error) {
    alert(error.message);
  }
}

async function createTask() {
  const body = {
    tid: document.getElementById('ctid').value.trim(),
    title: document.getElementById('ctitle').value.trim(),
    description: document.getElementById('cdesc').value.trim(),
    priority: document.getElementById('cpriority').value.trim(),
  };

  if (!body.tid || !body.title) {
    alert('tid and title are required');
    return;
  }

  try {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to create task');
    }
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
    alert('Task created successfully!');
  } catch (error) {
    alert(error.message);
  }
}
